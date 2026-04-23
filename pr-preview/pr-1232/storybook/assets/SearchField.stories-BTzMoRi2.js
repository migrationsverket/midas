import{r as m,f as l,j as t}from"./iframe-C-mFL-y5.js";import{S as d}from"./SearchField-B95tU0il.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CDI0lVX-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D1nXJARU.js";import"./clsx-B-dksMZM.js";import"./Form-BnpClDkZ.js";import"./useFocusRing-BcE_QfPF.js";import"./index-BdrHlOMt.js";import"./index-D51JQnab.js";import"./Input-B5Q3TADs.js";import"./Hidden-9ao8Y1ps.js";import"./Button-muDgoa96.js";import"./useLabel-CZgom9Hr.js";import"./useLabels-Ch3SsTuY.js";import"./useButton-DAL_GXyF.js";import"./FieldError-5__MdH0k.js";import"./Text-BMqghmwo.js";import"./clsx-Ciqy0D92.js";import"./Text-CCSjYwix.js";import"./RSPContexts-D19sCzde.js";import"./Group-BxnUnKSO.js";import"./useControlledState-CYklShRN.js";import"./useLocalizedStringFormatter-DwJHjI96.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BP8G-PJi.js";import"./useField-CphlyUa3.js";import"./TextField.module-DdivwlC8.js";import"./search-CAS3IBHP.js";import"./createLucideIcon-B54AhZJE.js";import"./x-CfBPXENx.js";import"./useLocalizedStringFormatter-BY-aq0y_.js";import"./Button-DbyCtJuo.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CO1695QU.js";import"./Collection-DRq2lVha.js";import"./index-Bcf3xR78.js";import"./DragAndDrop-D67rmmmt.js";import"./getScrollParent-doaue_Gl.js";import"./scrollIntoView-CtFeL4L4.js";import"./SelectionIndicator-Bw_ZnN4X.js";import"./SelectionManager-CaouC3k9.js";import"./useEvent-B7aauAUS.js";import"./useDescription-BVglMPey.js";import"./inertValue-DTp3kH2h.js";import"./useHighlightSelectionDescription-fT8ng38O.js";import"./useUpdateEffect-RlH990VU.js";import"./ListKeyboardDelegate-f6Ccs6WJ.js";import"./useHasTabbableChild-BTM2I3qN.js";import"./Checkbox-BdLxQNgg.js";import"./check-DxswyXaQ.js";import"./useToggleState-Eus11q0X.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
