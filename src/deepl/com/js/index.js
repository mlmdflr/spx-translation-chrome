export const init = () => {
    require('../css/index.css');
    getImgUrl()
    document.querySelector('#dl_cookieBanner') && document.querySelector('#dl_cookieBanner').remove();
    document.querySelector('header.dl_header.dl_header--sticky') && document.querySelector('header.dl_header.dl_header--sticky').remove();
    document.querySelector('#lmt_pro_ad_container') && document.querySelector('#lmt_pro_ad_container').remove();
    document.querySelector('div.dl_body--redesign.dl_top_element--wide.dl_visible_desktop_only.eSEOtericText') && document.querySelector('div.dl_body--redesign.dl_top_element--wide.dl_visible_desktop_only.eSEOtericText').remove();
    document.querySelector('div#dl_quotes_container') && document.querySelector('div#dl_quotes_container').remove();
    document.querySelector('div.dl_footerV2_container') && document.querySelector('div.dl_footerV2_container').remove();

    let _button_refresh = document.createElement('div');
    _button_refresh.className = 'lmt__targetLangMenu_extension glossary show';
    _button_refresh.innerHTML = (`<div class="lmt__glossaryButton ready"><span data-testid="deepl-ui-tooltip-container" class="contents--U08fI"><span data-testid="deepl-ui-tooltip-trigger" class="contents--U08fI"><span data-testid="deepl-ui-tooltip-target" class="Target--KAb3e contents--U08fI"><button id="glossary-button" type="button" class="lmt__glossaryButton__desktop" aria-describedby="tooltip-qd19yp"><div title="" class="lmt__glossary_button "><div class="lmt__glossary_button_label" dl-test="glossary-button"><svg t="1634091907879" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2425" data-spm-anchor-id="a313x.7781069.0.i0" width="20" height="20"><path d="M721.024 725.333333A298.666667 298.666667 0 1 1 810.666667 512a42.666667 42.666667 0 0 0 85.333333 0 384 384 0 1 0-128 286.208V810.666667c0 23.722667 19.114667 42.666667 42.666667 42.666666 23.722667 0 42.666667-19.114667 42.666666-42.666666v-128a42.538667 42.538667 0 0 0-42.666666-42.666667h-128c-23.722667 0-42.666667 19.114667-42.666667 42.666667 0 23.722667 19.114667 42.666667 42.666667 42.666666h38.357333z" fill="#3D3D3D" p-id="2426"></path></svg></div></div></button></span></span></span></div>`)
    _button_refresh.onclick = getImgUrl
    document.querySelector('.lmt__language_container_sec .lmt__targetLangMenu_extensions_container .lmt__targetLangMenu_extensions').appendChild(_button_refresh)
}


function getImgUrl() {
    chrome.runtime.sendMessage(
        {
            men: 'Refresh'
        },
        response => {
            console.log(response);
            const style = window.document.createElement("style");
            style.setAttribute("from", new Date().getTime())
            style.innerHTML = ` 
                body{
                    height: ${window.innerHeight}px;
                    background-size:100% 100%;
                    background-position: center;
                    background-image: url('${response.url}');
                }
                #dl_translator{
                    opacity: ${response.ggopacity};
                }
                .modal--l9GBM.noScroll--XcXwq.modal--HdqMl{
                    opacity: ${response.ggopacity};
                }
              `
            let index = 0
            const id = setInterval(() => {
                index++; if (index === 10) clearInterval(id);
                window.document.getElementsByTagName('head')[0] && window.document.getElementsByTagName('head')[0].appendChild(style) && clearInterval(id)
            }, 200)
        });
}
