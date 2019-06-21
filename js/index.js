$(function () {
    let input = $('input')
    input.on("input",function () {
        let val =$(this).val();
        let newarr = arr.filter(ele=>
            ele.name.includes(val) || ele.py.includes(val))
        render(newarr);

    })
    let arr = [
        {
            name:"张晋铭", tel:18406585202, py:"zhangjinming"
        },
        {
            name:"卫聪英",tel:18406585205,py:"weicongying"
        },
        {
            name:"李振龙",tel:18406585302,py:"lizhenlong"
        },
        {
            name:"高姣姣",tel:18406585119,py:"gaojiaojiao"
        },
        {
            name:"张艺",tel:19806580699,py:"zhangyi"
        },
        {
            name:"张鹤馨",tel:18406585630,py:"zhanghexin"
        },
        {
            name:"夏锡淼",tel:18406583202,py:"xiaximiao"
        },
        {
            name:"张晋铭", tel:18406585202, py:"zhangjinming"
        },
        {
            name:"卫聪英",tel:18406585205,py:"weicongying"
        },
        {
            name:"李振龙",tel:18406585302,py:"lizhenlong"
        },
        {
            name:"高姣姣",tel:18406585119,py:"gaojiaojiao"
        },
        {
            name:"张艺",tel:19806580699,py:"zhangyi"
        },
        {
            name:"张鹤馨",tel:18406585630,py:"zhanghexin"
        },
        {
            name:"夏锡淼",tel:18406583202,py:"xiaximiao"
        }
    ];
    let main =$('.main');
    let aside =$('.aside')
    let names =$('.name');
    let xs =$('.xs');
    let heights = names.offset().top;

    console.log(heights);
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop);
    let html2 ='';
    if ((scrollTop-heights)==0){

        html2 +=` <div class="xs">
                     <div>${firstchar}</div>
                 </div>`
    }
    xs.html(html2);
    render(arr);


    function render(arr){

       aside.empty();
       main.empty();
       let person = {};


       arr.forEach(ele=> {
           var firstchar = ele.py.charAt(0).toUpperCase();
           if (!person[firstchar]) {
               person[firstchar] = [];
           }
           person[firstchar].push(ele);

       }

    )

    let arrkeys = Object.keys(person).sort();

    let html ='';
    let html1 ='';


    for (let i =0;i<arrkeys.length;i++){
        let ele = arrkeys[i];
        html1 +=`
             <div onclick="">${ele}</div>
         `

        html += `
        <ul class="list">
         <li>
                <h2>${ele}</h2>
        `;
        for (let j =0;j<person[ele].length;j++){
            let info = person[ele][j];
            html +=`
            <div class="name"><a href="${info.tel}">${info.name}</a></div>
            `
        }
        html +=`</li></ul>`
    }

        aside.html(html1);
        main.html(html);
    }

})