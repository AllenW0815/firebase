$(function(){

    const callMenu = (category) => {
        // console.log(category);
        $.getJSON("/menu.json",function(result){
            const $tableArea = $('.wrap-table100')
            let display = ''
            // 藉由傳入的 category 篩掉其他項目
            let menuShow = result.filter( i => {
                if(category !== "ALL") {
                    return i.category === category
                } else {
                    return i
                }
                
            }) 
            // 篩選後 render 內容
            menuShow.forEach(function(i,index){
                let v = i.vw.filter((obj) => obj.type === 'v')[0]
                let w = i.vw.filter((obj) => obj.type === 'w')[0]
                let quantityType = i.quantity
                // 將 if 改用較適合擴充不同數量情形的 switch 方式
                switch(quantityType) {
                    case "A":
                        display += `
                        <div class="table100">
                            <table>
                                <h3 class="product_name">${i.name}</h3>
                                <thead>
                                    <tr class="table100-head">
                                        <th class="column1">張數</th>
                                        <th class="column2">500張</th>
                                        <th class="column3">1000張</th>
                                        <th class="column4">2000張</th>
                                        <th class="column4">4000張</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="column1">單印</td>
                                        <td class="column2">${v['500']}</td>
                                        <td class="column3">${v['1000']}</td>
                                        <td class="column4">${v['2000']}</td>
                                        <td class="column4">${v['4000']}</td>
                                    </tr>
                                    <tr>
                                        <td class="column1">雙印</td>
                                        <td class="column2">${w['500']}</td>
                                        <td class="column3">${w['1000']}</td>
                                        <td class="column4">${w['2000']}</td>
                                        <td class="column4">${w['4000']}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        `
                    break;
                    case "B":
                        display += `
                        <div class="table100">
                            <table>
                                <h3 class="product_name">${i.name}</h3>
                                <thead>
                                    <tr class="table100-head">
                                        <th class="column1">張數</th>
                                        <th class="column2">100張</th>
                                        <th class="column3">200張</th>
                                        <th class="column4">300張</th>
                                        <th class="column4">400張</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="column1">單印</td>
                                        <td class="column2">${v['100']}</td>
                                        <td class="column3">${v['200']}</td>
                                        <td class="column4">${v['300']}</td>
                                        <td class="column4">${v['400']}</td>
                                    </tr>
                                    <tr>
                                        <td class="column1">雙印</td>
                                        <td class="column2">${w['100']}</td>
                                        <td class="column3">${w['200']}</td>
                                        <td class="column4">${w['300']}</td>
                                        <td class="column4">${w['400']}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        `
                    break;
                    case "C":
                        display += `
                        <div class="table100">
                            <table>
                                <h3 class="product_name">${i.name}</h3>
                                <thead>
                                    <tr class="table100-head">
                                        <th class="column1">盒數</th>
                                        <th class="column2">5盒</th>
                                        <th class="column3">10盒</th>
                                        <th class="column4">50盒</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="column1">單印</td>
                                        <td class="column2">${v['5']}</td>
                                        <td class="column3">${v['10']}</td>
                                        <td class="column4">${v['50']}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        `
                    break;
                    case "D":
                        display += `
                        <div class="table100">
                            <table>
                                <h3 class="product_name">${i.name}</h3>
                                <thead>
                                    <tr class="table100-head">
                                        <th class="column1">盒數</th>
                                        <th class="column2">3盒</th>
                                        <th class="column3">5盒</th>
                                        <th class="column4">10盒</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="column1">單印</td>
                                        <td class="column2">${v['3']}</td>
                                        <td class="column3">${v['5']}</td>
                                        <td class="column4">${v['10']}</td>
                                    </tr>
                                    <tr>
                                        <td class="column1">雙印</td>
                                        <td class="column2">${w['3']}</td>
                                        <td class="column3">${w['5']}</td>
                                        <td class="column4">${w['10']}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        `
                    break;
                }
            })
            $tableArea.html(display)
        });

        $.ajax({
            url: "https://allenw0815.github.io/firebase/menu.json",
            method: "GET",
            dataType: "json",
            
            success:function(result){
                const $tableArea = $('.wrap-table100')
                let display = ''
                // 藉由傳入的 category 篩掉其他項目
                let menuShow = result.filter( i => {
                    if(category !== "ALL") {
                        return i.category === category
                    } else {
                        return i
                    }
                    
                }) 
                // 篩選後 render 內容
                menuShow.forEach(function(i,index){
                    let v = i.vw.filter((obj) => obj.type === 'v')[0]
                    let w = i.vw.filter((obj) => obj.type === 'w')[0]
                    let quantityType = i.quantity
                    // 將 if 改用較適合擴充不同數量情形的 switch 方式
                    switch(quantityType) {
                        case "A":
                            display += `
                            <div class="table100">
                                <table>
                                    <h3 class="product_name">${i.name}</h3>
                                    <thead>
                                        <tr class="table100-head">
                                            <th class="column1">張數</th>
                                            <th class="column2">500張</th>
                                            <th class="column3">1000張</th>
                                            <th class="column4">2000張</th>
                                            <th class="column4">4000張</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="column1">單印</td>
                                            <td class="column2">${v['500']}</td>
                                            <td class="column3">${v['1000']}</td>
                                            <td class="column4">${v['2000']}</td>
                                            <td class="column4">${v['4000']}</td>
                                        </tr>
                                        <tr>
                                            <td class="column1">雙印</td>
                                            <td class="column2">${w['500']}</td>
                                            <td class="column3">${w['1000']}</td>
                                            <td class="column4">${w['2000']}</td>
                                            <td class="column4">${w['4000']}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            `
                        break;
                        case "B":
                            display += `
                            <div class="table100">
                                <table>
                                    <h3 class="product_name">${i.name}</h3>
                                    <thead>
                                        <tr class="table100-head">
                                            <th class="column1">張數</th>
                                            <th class="column2">100張</th>
                                            <th class="column3">200張</th>
                                            <th class="column4">300張</th>
                                            <th class="column4">400張</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="column1">單印</td>
                                            <td class="column2">${v['100']}</td>
                                            <td class="column3">${v['200']}</td>
                                            <td class="column4">${v['300']}</td>
                                            <td class="column4">${v['400']}</td>
                                        </tr>
                                        <tr>
                                            <td class="column1">雙印</td>
                                            <td class="column2">${w['100']}</td>
                                            <td class="column3">${w['200']}</td>
                                            <td class="column4">${w['300']}</td>
                                            <td class="column4">${w['400']}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            `
                        break;
                        case "C":
                            display += `
                            <div class="table100">
                                <table>
                                    <h3 class="product_name">${i.name}</h3>
                                    <thead>
                                        <tr class="table100-head">
                                            <th class="column1">盒數</th>
                                            <th class="column2">5盒</th>
                                            <th class="column3">10盒</th>
                                            <th class="column4">50盒</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="column1">單印</td>
                                            <td class="column2">${v['5']}</td>
                                            <td class="column3">${v['10']}</td>
                                            <td class="column4">${v['50']}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            `
                        break;
                        case "D":
                            display += `
                            <div class="table100">
                                <table>
                                    <h3 class="product_name">${i.name}</h3>
                                    <thead>
                                        <tr class="table100-head">
                                            <th class="column1">盒數</th>
                                            <th class="column2">3盒</th>
                                            <th class="column3">5盒</th>
                                            <th class="column4">10盒</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="column1">單印</td>
                                            <td class="column2">${v['3']}</td>
                                            <td class="column3">${v['5']}</td>
                                            <td class="column4">${v['10']}</td>
                                        </tr>
                                        <tr>
                                            <td class="column1">雙印</td>
                                            <td class="column2">${w['3']}</td>
                                            <td class="column3">${w['5']}</td>
                                            <td class="column4">${w['10']}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            `
                        break;
                    }
                })
                $tableArea.html(display)
            },
            error:function(err){console.log(err)},
        });
    }

    $('.tabs li').on('click', function(e) {
        $(this).addClass('active').siblings().removeClass('active');
        const whichCategory = $(this).data('category') // 透過 data 比對顯示內容
        callMenu(whichCategory)
    })
    // 預設顯示內容為 ALL 初始化
    callMenu("ALL")

}());