import{r as m,f as l,j as t}from"./iframe-DEp2oG17.js";import{S as d}from"./SearchField-DZEPj7cf.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BEkoJQoS.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B8G_0Le1.js";import"./utils-BdDw9a3H.js";import"./useLocalizedStringFormatter-BceleSe3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BidBy0BP.js";import"./useFocusRing-Mb90B-sd.js";import"./index-DjxIfj_1.js";import"./index-bV2pO4CY.js";import"./useFormValidation-DUv_C9aQ.js";import"./useField-DUJQ4FTk.js";import"./Button-C_5E3NeR.js";import"./Hidden-CABjF7lx.js";import"./useLabels-Cyk4YZSQ.js";import"./useButton-tx-eN_jr.js";import"./search-Csl0OTCO.js";import"./createLucideIcon-CCWrt2pH.js";import"./ClearButton-Ci_UH81I.js";import"./Button-DbApqNlR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BCi1uvX3.js";import"./VisuallyHidden-CS5LSF1P.js";import"./x-BSkDXoR2.js";import"./FieldError-DN8iUwVl.js";import"./Text-CI29p5RE.js";import"./Text-DdOwJXNS.js";import"./RSPContexts-BpY8Nizo.js";import"./Collection-DBUct1uX.js";import"./index-9hY5KZHS.js";import"./DragAndDrop-QUgKtfHU.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cn2yDPPG.js";import"./SelectionManager-D-dREuN-.js";import"./useEvent-CKG_1VwL.js";import"./useDescription-8UxhvEwk.js";import"./inertValue-CHkq6hmI.js";import"./useHighlightSelectionDescription-CMr14fHa.js";import"./useUpdateEffect-CdawM-Ux.js";import"./ListKeyboardDelegate-Cyujz9V4.js";import"./useHasTabbableChild-CbogpxVM.js";import"./Checkbox-l05fczhW.js";import"./Form-D1N3FAIh.js";import"./check-B2Z0mvU0.js";import"./useToggleState-TxPhaChj.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
