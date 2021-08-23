$(function(){
    $.getJSON("/menu.json",function(result){
        const $tableArea = $('.wrap-table100')
        let display = ''
        result.forEach(function(i,index){
            let v = i.vw.filter((obj) => obj.type === 'v')[0]
            let w = i.vw.filter((obj) => obj.type === 'w')[0]
            if(i.id === "1" || i.id ==="2"){
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
            }else if (i.id === "3" || i.id ==="4"){
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
            result.forEach(function(i,index){
                let v = i.vw.filter((obj) => obj.type === 'v')[0]
                let w = i.vw.filter((obj) => obj.type === 'w')[0]
                if(i.id === "1" || i.id ==="2"){
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
                }else if (i.id === "3" || i.id ==="4"){       
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
                }

            })
            $tableArea.html(display)
        },
        error:function(err){console.log(err)},
      });
}());