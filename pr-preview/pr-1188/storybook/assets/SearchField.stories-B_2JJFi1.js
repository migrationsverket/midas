import{r as m,f as l,j as t}from"./iframe-Dr8Tkvah.js";import{S as d}from"./SearchField-ByfdBI7U.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-xJ-phvZI.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DOuA3kXF.js";import"./clsx-B-dksMZM.js";import"./Form-CVwLgz52.js";import"./useFocusRing-poi8r4OJ.js";import"./index-DM6sY-46.js";import"./index-CtVp1upA.js";import"./Input-Bo18jdB3.js";import"./Hidden-BjSG53-T.js";import"./Button-C610-Rnq.js";import"./useLabel-C7_L8_CN.js";import"./useLabels-DxkPONzl.js";import"./useButton-BViocPn_.js";import"./FieldError-K3l2DsmW.js";import"./Text-Dbwxk-C7.js";import"./clsx-Ciqy0D92.js";import"./Text-CQjzvGyg.js";import"./RSPContexts-DIaWsy7a.js";import"./Group-ChzXJMKR.js";import"./useControlledState-DzvWO88h.js";import"./useLocalizedStringFormatter-CR5zAqVa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cl7V3AhN.js";import"./useField-JpMYATHc.js";import"./TextField.module-DdivwlC8.js";import"./search-BTQSsk8H.js";import"./createLucideIcon-Boz8MrIZ.js";import"./x-UdkypbZC.js";import"./useLocalizedStringFormatter-Cn25UGjx.js";import"./Button-B4jxTFim.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CqOJHiwP.js";import"./Collection-ZUTSynsr.js";import"./index-DmP7bTRl.js";import"./DragAndDrop-E99h4rYD.js";import"./getScrollParent-CUIafVHW.js";import"./scrollIntoView-B1LP76du.js";import"./SelectionIndicator-DrvF5BTC.js";import"./SelectionManager-7-ML4KyD.js";import"./useEvent-DThJtK0k.js";import"./useDescription-BhmkpAHf.js";import"./inertValue-uJjVa_ls.js";import"./useHighlightSelectionDescription-B-b70mq9.js";import"./useUpdateEffect-k9O9r0nD.js";import"./ListKeyboardDelegate-Zit5pbv0.js";import"./useHasTabbableChild-Yo1ZoGJY.js";import"./Checkbox-DHQ3Wx-F.js";import"./check-BS7aZ1Ma.js";import"./useToggleState-C5DgbqYj.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
