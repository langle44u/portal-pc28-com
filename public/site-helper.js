(function() {
    'use strict';

    var CONFIG = {
        siteUrl: 'https://portal-pc28.com',
        keyword: '加拿大28',
        apiEndpoint: '/api/status'
    };

    function buildCard(title, content, type) {
        var card = document.createElement('div');
        card.className = 'helper-card helper-card-' + (type || 'info');
        var h3 = document.createElement('h3');
        h3.textContent = title;
        card.appendChild(h3);
        var p = document.createElement('p');
        p.textContent = content;
        card.appendChild(p);
        return card;
    }

    function buildBadge(text, color) {
        var span = document.createElement('span');
        span.className = 'keyword-badge';
        span.textContent = text;
        if (color) {
            span.style.backgroundColor = color;
        }
        return span;
    }

    function createAccessNotice() {
        var notice = document.createElement('div');
        notice.className = 'access-notice';
        var strong = document.createElement('strong');
        strong.textContent = '访问说明';
        notice.appendChild(strong);
        var ul = document.createElement('ul');
        var items = [
            '请使用最新浏览器访问 ' + CONFIG.siteUrl,
            '关键词「' + CONFIG.keyword + '」仅作示例参考',
            '页面数据每60秒自动刷新'
        ];
        items.forEach(function(text) {
            var li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
        });
        notice.appendChild(ul);
        return notice;
    }

    function initHelper() {
        var container = document.getElementById('helper-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'helper-container';
            document.body.appendChild(container);
        }

        var card1 = buildCard(
            '页面提示',
            '欢迎使用 ' + CONFIG.keyword + ' 辅助功能。当前站点版本基于社区反馈持续更新。',
            'info'
        );
        container.appendChild(card1);

        var badgeRow = document.createElement('div');
        badgeRow.className = 'badge-row';
        var tags = ['加拿大28', 'PC28', '预测', '数据', '走势'];
        var colors = ['#4a90d9', '#e67e22', '#27ae60', '#8e44ad', '#c0392b'];
        tags.forEach(function(tag, idx) {
            var badge = buildBadge(tag, colors[idx % colors.length]);
            badgeRow.appendChild(badge);
        });
        container.appendChild(badgeRow);

        var notice = createAccessNotice();
        container.appendChild(notice);

        var statusCard = buildCard(
            '系统状态',
            '正在连接 ' + CONFIG.siteUrl + ' ... 请检查网络连通性。',
            'warning'
        );
        container.appendChild(statusCard);

        var style = document.createElement('style');
        style.textContent = [
            '#helper-container { max-width: 600px; margin: 20px auto; font-family: sans-serif; }',
            '.helper-card { border: 1px solid #ddd; border-radius: 8px; padding: 16px; margin-bottom: 12px; background: #fafafa; }',
            '.helper-card-info { border-left: 4px solid #3498db; }',
            '.helper-card-warning { border-left: 4px solid #f39c12; }',
            '.helper-card h3 { margin: 0 0 6px; font-size: 18px; }',
            '.helper-card p { margin: 0; color: #555; }',
            '.badge-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }',
            '.keyword-badge { display: inline-block; padding: 4px 12px; border-radius: 12px; color: #fff; font-size: 13px; font-weight: 600; }',
            '.access-notice { background: #fffbe6; border: 1px solid #ffe58f; border-radius: 8px; padding: 12px 16px; margin-bottom: 12px; }',
            '.access-notice strong { display: block; margin-bottom: 6px; }',
            '.access-notice ul { margin: 0; padding-left: 20px; }',
            '.access-notice li { margin-bottom: 4px; color: #666; }'
        ].join(' ');
        document.head.appendChild(style);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHelper);
    } else {
        initHelper();
    }
})();