import{r as m,f as l,j as t}from"./iframe-cYpxZzUZ.js";import{S as d}from"./SearchField-DoqmAhVG.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CX4y9Xpw.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BAEBGgdv.js";import"./utils-Da5YKx2_.js";import"./useLocalizedStringFormatter-BSJ4rvpt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C4i3To1d.js";import"./useFocusRing-Ro1kVhTk.js";import"./index-DWJi6tle.js";import"./index-nlAR4CdQ.js";import"./useFormValidation-cnpDgIF1.js";import"./useField-KHoqv6p7.js";import"./Button-I19PkSL9.js";import"./Hidden-CEh4KexJ.js";import"./useLabels-yIxCyUCA.js";import"./useButton-BTaVYt9k.js";import"./search-DCOb_JbZ.js";import"./createLucideIcon-CeCkLO_B.js";import"./ClearButton-C702IQa5.js";import"./x-BpfnAhHg.js";import"./Button-CJf-JCMB.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Cgn8B_F7.js";import"./VisuallyHidden-DaBYovm5.js";import"./FieldError-B5Zp84t6.js";import"./Text-BEBHFL1U.js";import"./Text-BWvCs6nS.js";import"./RSPContexts-PAZO9wT0.js";import"./Collection-DMSsilCO.js";import"./index-BHK2Mwib.js";import"./DragAndDrop-t6cEZ5U1.js";import"./getScrollParent-DCSYnjJt.js";import"./scrollIntoView-rdHf84fN.js";import"./SelectionIndicator-CHMUoP5F.js";import"./SelectionManager-CBa264Qr.js";import"./useEvent-CieYChAx.js";import"./useDescription-D_79kmmu.js";import"./inertValue-BIO560QP.js";import"./useHighlightSelectionDescription-DEw_Vxh1.js";import"./useUpdateEffect-DPvw_Y-3.js";import"./ListKeyboardDelegate-MdSAf45I.js";import"./useHasTabbableChild-IcDKLlES.js";import"./Checkbox-BRG6n6Mc.js";import"./Form-DzRAN7ks.js";import"./check-Bnp2xvem.js";import"./useToggleState-CiXmN9Rf.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
