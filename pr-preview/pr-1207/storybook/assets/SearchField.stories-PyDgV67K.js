import{r as m,f as l,j as t}from"./iframe-iqG9Nh4p.js";import{S as d}from"./SearchField-CF_Zv-3I.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dk9LumhJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CoA-xVnF.js";import"./clsx-B-dksMZM.js";import"./Form-CbmDO35g.js";import"./useFocusRing-DlPMedN0.js";import"./index-CRxXIn2u.js";import"./index-B42Zj5NC.js";import"./Input-C49iH8T-.js";import"./Hidden-CGqHEiYj.js";import"./Button-DY22xJQl.js";import"./useLabel-CaKtnxKo.js";import"./useLabels-UUcXsAwx.js";import"./useButton-Brn-yYNf.js";import"./FieldError-BAXhhZix.js";import"./Text-CGCkUK8m.js";import"./clsx-Ciqy0D92.js";import"./Text-CSjoqRHi.js";import"./RSPContexts-DhG5bWz2.js";import"./Group-Lj4AaGC3.js";import"./useControlledState-_AGiuRBn.js";import"./useLocalizedStringFormatter-Cghfuk7K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DruNV9Kq.js";import"./useField-BsvjlsG3.js";import"./TextField.module-DdivwlC8.js";import"./search-BFaM_HI5.js";import"./createLucideIcon-Boi8XEVW.js";import"./x-ItA_xlKi.js";import"./useLocalizedStringFormatter-QZ0YYeXI.js";import"./Button-DtcyQC3H.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DzRCdULp.js";import"./Collection-U_BfqLcj.js";import"./index-BLKoWDIL.js";import"./DragAndDrop-CLUaf_jL.js";import"./getScrollParent-D-DaScmO.js";import"./scrollIntoView-BjOH4z_I.js";import"./SelectionIndicator-xMaCnY94.js";import"./SelectionManager-mV9s15G1.js";import"./useEvent-BB-kg239.js";import"./useDescription-Cj0GwJ4J.js";import"./inertValue-CXeFcZWn.js";import"./useHighlightSelectionDescription-BVuCNXt-.js";import"./useUpdateEffect-BJ9VVEyY.js";import"./ListKeyboardDelegate-DdqydRaK.js";import"./useHasTabbableChild-DrZ9reqj.js";import"./Checkbox-5oTqIDkb.js";import"./check-_q8zxWoL.js";import"./useToggleState-K4iyFcmu.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
