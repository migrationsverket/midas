import{r as m,f as l,j as t}from"./iframe-D4usB9n2.js";import{S as d}from"./SearchField-BkMvPXfS.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-fIx_DANo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Chiz1oN2.js";import"./clsx-B-dksMZM.js";import"./Form-DzQgMoUt.js";import"./useFocusRing-ihkH1nOS.js";import"./index-D_BiQ3CN.js";import"./index-D7VIiBEs.js";import"./Input-DfrvXYgD.js";import"./Hidden-Cn6dZTod.js";import"./Button-C0ozI8gk.js";import"./useLabel-Bqb-L3h5.js";import"./useLabels-D2vaRbqn.js";import"./useButton-DDapGTCA.js";import"./FieldError-CPaCZkAy.js";import"./Text-DCjCSbNe.js";import"./clsx-Ciqy0D92.js";import"./Text-BPVUDIkV.js";import"./RSPContexts-D-vGj3gL.js";import"./Group-CLbmpECC.js";import"./useControlledState-DA5Xz2a0.js";import"./useLocalizedStringFormatter-_6pgVaCX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CANanKHX.js";import"./useField-Cgg__gMv.js";import"./TextField.module-DdivwlC8.js";import"./search-XYvZx_jY.js";import"./createLucideIcon-DqajdqxS.js";import"./x-B4mY3mrq.js";import"./useLocalizedStringFormatter-C7hYA8xN.js";import"./Button-DaUg4W92.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DISGYBiK.js";import"./Collection-FpyIrNSE.js";import"./index-CTrbRtu6.js";import"./DragAndDrop-CjeepZlE.js";import"./getScrollParent-BPU2H25u.js";import"./scrollIntoView-DMee3u0y.js";import"./SelectionIndicator-D-N9NSP8.js";import"./SelectionManager-BDWSM55Y.js";import"./useEvent-B_vV08nn.js";import"./useDescription-CP735cHb.js";import"./inertValue-DSKx4vla.js";import"./useHighlightSelectionDescription-DCQQxPkW.js";import"./useUpdateEffect-Df8ADDLK.js";import"./ListKeyboardDelegate-d00XesEb.js";import"./useHasTabbableChild-DL6xrwaO.js";import"./Checkbox-CSKG9WQT.js";import"./check-g7xQiicO.js";import"./useToggleState-B1GIoGoL.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
