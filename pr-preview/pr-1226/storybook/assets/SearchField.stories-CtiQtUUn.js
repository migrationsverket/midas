import{r as m,f as l,j as t}from"./iframe-D49zqrLc.js";import{S as d}from"./SearchField-BoDRqc1w.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BnsGhFDT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DdKwVxXO.js";import"./clsx-B-dksMZM.js";import"./Form-CGqphfov.js";import"./useFocusRing--JbYat2w.js";import"./index-CIcuBPP4.js";import"./index-Gblu_uca.js";import"./Input-DCVWDyBK.js";import"./Hidden-BxWMNY2q.js";import"./Button-J3Iz-Is0.js";import"./useLabel-DknYPbVU.js";import"./useLabels-CkRRpiK4.js";import"./useButton-CxrKCV_E.js";import"./FieldError-CNr2Wry7.js";import"./Text-gxnzhlQB.js";import"./clsx-Ciqy0D92.js";import"./Text-BHKGtyr7.js";import"./RSPContexts-BB17GfA4.js";import"./Group-BpoIKBD4.js";import"./useControlledState-DfjmYRRj.js";import"./useLocalizedStringFormatter-CsaBVSjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ads8gc7M.js";import"./useField-boYe1x_I.js";import"./TextField.module-DdivwlC8.js";import"./search-Xx38pKWL.js";import"./createLucideIcon-DrHl8fY3.js";import"./x-DZqz0o0J.js";import"./useLocalizedStringFormatter-D9dAP4k5.js";import"./Button-CsehA-0Y.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BCA1C0LI.js";import"./Collection-CzY8nsaY.js";import"./index-Djqzw61o.js";import"./DragAndDrop-Dlui2VtD.js";import"./getScrollParent-ailHkxD7.js";import"./scrollIntoView-vmM-KOvz.js";import"./SelectionIndicator-B6VviSvn.js";import"./SelectionManager-BmBUzZWk.js";import"./useEvent-BNdUgJ17.js";import"./useDescription-2_Msdgp6.js";import"./inertValue-BMBwO9Ev.js";import"./useHighlightSelectionDescription-Dg7ZvM28.js";import"./useUpdateEffect-BsXudpGt.js";import"./ListKeyboardDelegate-B6Q_xrg3.js";import"./useHasTabbableChild-CX1otzxF.js";import"./Checkbox-0LpK-5l1.js";import"./check-DpJGA4u9.js";import"./useToggleState-CDOOjpQY.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
