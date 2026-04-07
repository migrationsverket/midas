import{r as m,f as l,j as t}from"./iframe-CpD0sz2e.js";import{S as d}from"./SearchField-DSTxnPsd.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DRy4YIwL.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ojEvGYm9.js";import"./clsx-B-dksMZM.js";import"./Form-DxMz1J6H.js";import"./useFocusRing-CBhF1Pep.js";import"./index-2osu5sAu.js";import"./index-C5xpIHaH.js";import"./Input-dDREXL9s.js";import"./Hidden-CJYkSVxl.js";import"./Button-TIyC3aNe.js";import"./useLabel-BcpaW40H.js";import"./useLabels-DFOTVMl_.js";import"./useButton-ku5NYICY.js";import"./FieldError-DwX7T7Dy.js";import"./Text-eC571-Sp.js";import"./clsx-Ciqy0D92.js";import"./Text-BdNXNsJY.js";import"./RSPContexts-C3ByxqzR.js";import"./Group-CAOphb69.js";import"./useControlledState-DBG5XgRx.js";import"./useLocalizedStringFormatter-CO2jAPcS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C1s1PE88.js";import"./useField-rnQHL0Me.js";import"./TextField.module-DdivwlC8.js";import"./search-CTBF_lAN.js";import"./createLucideIcon-DFkdkqMu.js";import"./x-CZaGtiyi.js";import"./useLocalizedStringFormatter-BvEEsuGU.js";import"./Button-BEQpNkHS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BXLSQV9r.js";import"./Collection-BfwYAR2I.js";import"./index-DDxHk1Dv.js";import"./DragAndDrop-4jYtZQ5I.js";import"./getScrollParent-DH_QPoUW.js";import"./scrollIntoView-Dc3aCiHD.js";import"./SelectionIndicator-D6jFdMfo.js";import"./SelectionManager-BRGCZ5vw.js";import"./useEvent-ZFJxjcoT.js";import"./useDescription-BlE-AVuu.js";import"./inertValue-CP2mhDPO.js";import"./useHighlightSelectionDescription-DaMutfW5.js";import"./useUpdateEffect-BKMD5FRx.js";import"./ListKeyboardDelegate-D7_f1PQY.js";import"./useHasTabbableChild-DJy8AVyu.js";import"./Checkbox-BIJ67Ixh.js";import"./check-ChkgyOre.js";import"./useToggleState-VpQQOtze.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
