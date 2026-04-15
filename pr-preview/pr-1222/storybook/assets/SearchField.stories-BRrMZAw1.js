import{r as m,f as l,j as t}from"./iframe-Co8ouiR0.js";import{S as d}from"./SearchField-TnCMdo-p.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CdlH_O5B.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CaTFkK5X.js";import"./clsx-B-dksMZM.js";import"./Form-Ckl-USsE.js";import"./useFocusRing-Dxdgl-gF.js";import"./index-2SWVDjSK.js";import"./index-Cebtxf6H.js";import"./Input-aufJAFK1.js";import"./Hidden-TJ2PhhZw.js";import"./Button-BP9TK4Xh.js";import"./useLabel-CFh1kjGP.js";import"./useLabels-BI3YgoCG.js";import"./useButton-D1lFKu5A.js";import"./FieldError-CEGfntdp.js";import"./Text-DtfYRBf1.js";import"./clsx-Ciqy0D92.js";import"./Text-B5_C6N3n.js";import"./RSPContexts-DtYDmIKY.js";import"./Group-CFHeoX-M.js";import"./useControlledState-CaplsX9m.js";import"./useLocalizedStringFormatter-DQmIYKST.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-vKxQkpA7.js";import"./useField-CC0WBTcL.js";import"./TextField.module-DdivwlC8.js";import"./search-Dw0ADeSX.js";import"./createLucideIcon-CuuVQ0Rb.js";import"./x-BzzbKOkA.js";import"./useLocalizedStringFormatter-BlJUxnvu.js";import"./Button-BOgReN_Q.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DHiWfcqJ.js";import"./Collection-DINZb8zb.js";import"./index-B_luancG.js";import"./DragAndDrop-DhYYSs9w.js";import"./getScrollParent-BedhNeW7.js";import"./scrollIntoView-DvPgTXx8.js";import"./SelectionIndicator-DWiIapfM.js";import"./SelectionManager-BWBhr4BK.js";import"./useEvent-Cm1cXmjt.js";import"./useDescription-HAOJ4Hrg.js";import"./inertValue-DxfYvFWQ.js";import"./useHighlightSelectionDescription-CcUajBdZ.js";import"./useUpdateEffect-9tSZ3x0q.js";import"./ListKeyboardDelegate-CsIF4ql5.js";import"./useHasTabbableChild-Dz52NrWh.js";import"./Checkbox-BG0A2kn9.js";import"./check-DdO9ttZ6.js";import"./useToggleState-ClTs80al.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
