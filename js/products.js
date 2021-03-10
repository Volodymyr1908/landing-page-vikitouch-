class Products {

    render() {
        let htmlCatalog = "";
        CATALOG.forEach(({id, name, price, img}) => {

            htmlCatalog += `
                <div class="service_section_box">
                    <div class="bc_color"></div>
                    <div class="service_image">
                        <img src="${img}" alt="pic" /
                    </div>
                    <div class="txt">
                        <span class="service_name">${name}</span>
<!--                        <br>-->
                        <span class="service_info"></span>
                        <div class="service_price">
                            <span class="cost">Вартість - ${price}</span>
                        </div>
                    </div>
                </div>
            `;

        });

        const html = `
           <div class="service_section_wrapper">
                ${htmlCatalog}
            </div>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();