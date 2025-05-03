from flask import Blueprint, jsonify
import requests
from bs4 import BeautifulSoup
from models import db, News

crawler_bp = Blueprint('crawler_bp', __name__)

@crawler_bp.route('/crawler/fetch', methods=['POST'])
def fetch_and_store_news():
    url = 'https://news.ycombinator.com/'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    added = 0
    for item in soup.select('.athing')[:10]:
        title_tag = item.select_one('.titleline a')
        if title_tag:
            title = title_tag.text
            link = title_tag['href']
            
            # 檢查是否已存在（避免重複）
            if not News.query.filter_by(title=title, url=link).first():
                news = News(title=title, url=link)
                db.session.add(news)
                added += 1

    db.session.commit()
    return jsonify({'message': f'{added} new items added.'})

@crawler_bp.route('/crawler/news', methods=['GET'])
def get_saved_news():
    news = News.query.order_by(News.created_at.desc()).limit(10).all()
    return jsonify([
        {
            'title': n.title,
            'url': n.url,
            'created_at': n.created_at.isoformat()
        }
        for n in news
    ])