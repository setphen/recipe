webpackJsonp([68219209551865],{491:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Cards are the primary means of visually grouping content on a page. Most content should appear inside a card. Cards control the vertical spacing of their content.</p>\n<hr>\n<h2 id="best-practices"><a href="#best-practices" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Best Practices</h2>\n<p>Cards should:</p>\n<ul>\n<li>Be used to organize page content.</li>\n<li>Contain related content. Otherwise consider using two separate Cards.</li>\n<li>Contain a maximum of one primary call-to-action per card.</li>\n<li>Position calls-to-action for next steps at the bottom of the card, and use the space in the top right for optional actions.</li>\n<li>Use <a href="#card-with-sections">Card Sections</a> for related but distinct content. Multiple sections can help break up complicated concepts to make them easier to scan.</li>\n<li>Optionally use a heading to help identify the contents of the card at-a-glance.</li>\n<li>Cards with accents should be used sparingly.</li>\n</ul>\n<p>Cards should not:</p>\n<ul>\n<li>Be nested inside each other.</li>\n</ul>\n<p>Card Sections should not:</p>\n<ul>\n<li>Be used outside of a Card</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<h3 id="basic-card"><a href="#basic-card" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Card</h3>\n<p>Used to separate a screen\'s main content into meaningful groups.</p>\n<pre><code class="language-jsx">&#x3C;EzCard>\n  &#x3C;div>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  &#x3C;/div>\n  &#x3C;div>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  &#x3C;/div>\n&#x3C;/EzCard>\n</code></pre>\n<h3 id="card-with-heading"><a href="#card-with-heading" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Card with Heading</h3>\n<p>Cards can have an optional heading. Headings should be descriptive of the entire card, not just the first section. Headings should be used when you want the content to be identifiable at a glance.</p>\n<pre><code class="language-jsx">&#x3C;EzCard title="Card Heading">\n  &#x3C;div>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  &#x3C;/div>\n&#x3C;/EzCard>\n</code></pre>\n<h3 id="card-with-subheading"><a href="#card-with-subheading" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Card with Subheading</h3>\n<p>Cards can have an optional subheading to provide further information for the card. A subheading should only be used with a heading and should also describe the entire card, not just a particular section.</p>\n<pre><code class="language-jsx">&#x3C;EzCard title="Card Heading" subtitle="Descriptive information about the card">\n  &#x3C;div>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  &#x3C;/div>\n&#x3C;/EzCard>\n</code></pre>\n<h3 id="card-with-sections"><a href="#card-with-sections" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Card with Sections</h3>\n<p>Cards can have multiple sections to break up complex content into easier to digest parts. Card Sections are automatically separated visually with a divider when used in the default configuration (vertically stacked).</p>\n<p>You don\'t need to use an <code>EzCardSection</code> if you only have one section in your panel (the component automatically wraps the content in a single section if needed).</p>\n<pre><code class="language-jsx">&#x3C;EzCard title="Card Heading">\n  &#x3C;EzCardSection>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  &#x3C;/EzCardSection>\n  &#x3C;EzCardSection>\n    &#x3C;div>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n    &#x3C;/div>\n    &#x3C;div>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n    &#x3C;/div>\n  &#x3C;/EzCardSection>\n&#x3C;/EzCard>\n</code></pre>\n<h3 id="card-with-horizontal-sections"><a href="#card-with-horizontal-sections" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Card with Horizontal Sections</h3>\n<p>Sections can also be laid out horizontally. There is no separator when sections are displayed horizontally.</p>\n<pre><code class="language-jsx">&#x3C;EzCard title="Card Heading" horizontal>\n  &#x3C;EzCardSection>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  &#x3C;/EzCardSection>\n  &#x3C;EzCardSection>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  &#x3C;/EzCardSection>\n&#x3C;/EzCard>\n</code></pre>\n<h3 id="cards-with-accents"><a href="#cards-with-accents" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cards with Accents</h3>\n<h4 id="info-accent"><a href="#info-accent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Info Accent</h4>\n<p>Accented info cards can be used when you want to draw attention to a card that does not need immediate action.</p>\n<pre><code class="language-jsx">&#x3C;EzCard title="Card Heading" accent="info">\n  &#x3C;div>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  &#x3C;/div>\n&#x3C;/EzCard>\n</code></pre>\n<hr>\n<h2 id="limitations"><a href="#limitations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Limitations</h2>\n<ul>\n<li>Cards currently do not support full-sized linkable content.</li>\n<li>Cards currently do not support varying horizontal/vertical layouts for Card Sections across breakpoints.</li>\n</ul>\n<hr>\n<h2 id="related-components"><a href="#related-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Related components</h2>\n<ul>\n<li><a href="/recipe/components/ez-page-content">Page Content</a></li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Cards are the primary means of visually grouping content on a page. Most content should appear inside a card. Cards control the vertical spacing of their content."}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"best-practices"},children:[{type:"element",tagName:"a",properties:{href:"#best-practices",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Best Practices"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Cards should:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Be used to organize page content."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Contain related content. Otherwise consider using two separate Cards."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Contain a maximum of one primary call-to-action per card."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Position calls-to-action for next steps at the bottom of the card, and use the space in the top right for optional actions."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"a",properties:{href:"#card-with-sections"},children:[{type:"text",value:"Card Sections"}]},{type:"text",value:" for related but distinct content. Multiple sections can help break up complicated concepts to make them easier to scan."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Optionally use a heading to help identify the contents of the card at-a-glance."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Cards with accents should be used sparingly."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Cards should not:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Be nested inside each other."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Card Sections should not:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Be used outside of a Card"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"examples"},children:[{type:"element",tagName:"a",properties:{href:"#examples",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Examples"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"basic-card"},children:[{type:"element",tagName:"a",properties:{href:"#basic-card",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Basic Card"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Used to separate a screen's main content into meaningful groups."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:"<EzCard>\n  <div>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  </div>\n  <div>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  </div>\n</EzCard>\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"card-with-heading"},children:[{type:"element",tagName:"a",properties:{href:"#card-with-heading",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Card with Heading"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Cards can have an optional heading. Headings should be descriptive of the entire card, not just the first section. Headings should be used when you want the content to be identifiable at a glance."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:'<EzCard title="Card Heading">\n  <div>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  </div>\n</EzCard>\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"card-with-subheading"},children:[{type:"element",tagName:"a",properties:{href:"#card-with-subheading",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Card with Subheading"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Cards can have an optional subheading to provide further information for the card. A subheading should only be used with a heading and should also describe the entire card, not just a particular section."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:'<EzCard title="Card Heading" subtitle="Descriptive information about the card">\n  <div>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  </div>\n</EzCard>\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"card-with-sections"},children:[{type:"element",tagName:"a",properties:{href:"#card-with-sections",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Card with Sections"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Cards can have multiple sections to break up complex content into easier to digest parts. Card Sections are automatically separated visually with a divider when used in the default configuration (vertically stacked)."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You don't need to use an "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"EzCardSection"}]},{type:"text",value:" if you only have one section in your panel (the component automatically wraps the content in a single section if needed)."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:'<EzCard title="Card Heading">\n  <EzCardSection>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  </EzCardSection>\n  <EzCardSection>\n    <div>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n    </div>\n    <div>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n      maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n    </div>\n  </EzCardSection>\n</EzCard>\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"card-with-horizontal-sections"},children:[{type:"element",tagName:"a",properties:{href:"#card-with-horizontal-sections",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Card with Horizontal Sections"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Sections can also be laid out horizontally. There is no separator when sections are displayed horizontally."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:'<EzCard title="Card Heading" horizontal>\n  <EzCardSection>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  </EzCardSection>\n  <EzCardSection>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  </EzCardSection>\n</EzCard>\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"cards-with-accents"},children:[{type:"element",tagName:"a",properties:{href:"#cards-with-accents",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Cards with Accents"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{id:"info-accent"},children:[{type:"element",tagName:"a",properties:{href:"#info-accent",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Info Accent"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Accented info cards can be used when you want to draw attention to a card that does not need immediate action."}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-jsx"]},children:[{type:"text",value:'<EzCard title="Card Heading" accent="info">\n  <div>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus, in\n    maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.\n  </div>\n</EzCard>\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"limitations"},children:[{type:"element",tagName:"a",properties:{href:"#limitations",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Limitations"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Cards currently do not support full-sized linkable content."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Cards currently do not support varying horizontal/vertical layouts for Card Sections across breakpoints."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"related-components"},children:[{type:"element",tagName:"a",properties:{href:"#related-components",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Related components"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"/recipe/components/ez-page-content"},children:[{type:"text",value:"Page Content"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{path:"/components/ez-card",title:"Card"}}},pathContext:{}}}});
//# sourceMappingURL=path---components-ez-card-41fbee3d4288d9c09764.js.map