import{r as m,f as l,j as t}from"./iframe-DWEKRq51.js";import{S as d}from"./SearchField-CPtYHsFA.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CTHfAXfN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CvB-FF5L.js";import"./clsx-B-dksMZM.js";import"./Form-DTx40CXW.js";import"./useFocusRing-oyMjxI0a.js";import"./index-Du9C_P01.js";import"./index-MiMvQR0t.js";import"./Input-DdOuc8_g.js";import"./Hidden-6-qbYCow.js";import"./Button-Bw7IRosA.js";import"./useLabel-07pv796X.js";import"./useLabels-P5GsSUyo.js";import"./useButton-CoUdGt-0.js";import"./FieldError-MXzqgYJW.js";import"./Text-DNCNcmFD.js";import"./clsx-Ciqy0D92.js";import"./Text-BNtmLJ5Q.js";import"./RSPContexts-Cwb07yZR.js";import"./Group-GsD_OCkz.js";import"./useControlledState-BpWescyC.js";import"./useLocalizedStringFormatter-Dh-ctuYo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-MbP2dyiG.js";import"./useField-BhhYiwGD.js";import"./TextField.module-DdivwlC8.js";import"./search-VWoozmsh.js";import"./createLucideIcon-BuZoCqNM.js";import"./x-DF20yF-2.js";import"./useLocalizedStringFormatter-BRwZafvm.js";import"./Button-CpAjWvzP.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D7nX5YNu.js";import"./Collection-DgwJjlxw.js";import"./index-ZJcgO-78.js";import"./DragAndDrop-m7cjDT6l.js";import"./getScrollParent-C8jbhUL1.js";import"./scrollIntoView-CPfbYeEn.js";import"./SelectionIndicator-CTz6ddff.js";import"./SelectionManager-J7bJBg_Z.js";import"./useEvent-CTaznQxk.js";import"./useDescription-FiAMJAPm.js";import"./inertValue-BoSSP3hM.js";import"./useHighlightSelectionDescription-Dp3xgG9s.js";import"./useUpdateEffect--AV7M5V_.js";import"./ListKeyboardDelegate-o9CjPHxf.js";import"./useHasTabbableChild-abehheQh.js";import"./Checkbox-CW3To3VD.js";import"./check-rpiK2iOR.js";import"./useToggleState-BRsTRv0u.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
