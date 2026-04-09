import{r as m,f as l,j as t}from"./iframe-CKFMuO9m.js";import{S as d}from"./SearchField-C8-YMMQT.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Xyf8HncP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D5GKgKLw.js";import"./clsx-B-dksMZM.js";import"./Form-CIVuJeWD.js";import"./useFocusRing-yfimCeup.js";import"./index-6i8ZJQUe.js";import"./index-DDqKr8WO.js";import"./Input-D_Vce_3G.js";import"./Hidden-Dy9FDq_i.js";import"./Button-r5FEcXKA.js";import"./useLabel-Biy0vo30.js";import"./useLabels-D1n_UWc_.js";import"./useButton-CBEFeFxS.js";import"./FieldError-BxVlGG_h.js";import"./Text-D6Srqbyc.js";import"./clsx-Ciqy0D92.js";import"./Text-CA1blZ7p.js";import"./RSPContexts-DhqrhFMI.js";import"./Group-BmEjfMGD.js";import"./useControlledState-BexPn5vQ.js";import"./useLocalizedStringFormatter-BF0ENpbS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-AV2_XkOS.js";import"./useField-Do1u8hN3.js";import"./TextField.module-DdivwlC8.js";import"./search-CKBiYhdg.js";import"./createLucideIcon-C2PX8F3A.js";import"./x-BvWk0FrP.js";import"./useLocalizedStringFormatter-BlqBGSSd.js";import"./Button-DCc3RCFi.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DCQS44v1.js";import"./Collection-ufR-ynN_.js";import"./index-2H2h2DF8.js";import"./DragAndDrop-Q_86opdk.js";import"./getScrollParent-CRWGRsX_.js";import"./scrollIntoView-DixLNrnP.js";import"./SelectionIndicator-BFcBA69R.js";import"./SelectionManager-DFf4iKUm.js";import"./useEvent-DtZHTgkv.js";import"./useDescription-Df78gmXN.js";import"./inertValue-B79atYmm.js";import"./useHighlightSelectionDescription-CubTK3wx.js";import"./useUpdateEffect-C13oSkuA.js";import"./ListKeyboardDelegate-uWRRNnxO.js";import"./useHasTabbableChild-CXatDQ_P.js";import"./Checkbox-CFVdNKYx.js";import"./check-D5Aot5iT.js";import"./useToggleState-BlJWxHoy.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
