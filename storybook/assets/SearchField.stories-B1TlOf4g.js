import{r as m,f as l,j as t}from"./iframe-QWuQ_a_L.js";import{S as d}from"./SearchField-C5cFZpF-.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-PvTEGg6p.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DmhZDXqG.js";import"./utils-CxNcyM92.js";import"./useLocalizedStringFormatter-CHjb52Du.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BuiAJGd-.js";import"./useFocusRing-NgK8_rV0.js";import"./index-DnDJQrpf.js";import"./index-DhvOpsCp.js";import"./useFormValidation-NfSUaEh2.js";import"./useField-CNo83OKT.js";import"./Button-KogFliLu.js";import"./Hidden-BjMXI3fA.js";import"./useLabels-BR_PNTmP.js";import"./useButton-D-kJSK4W.js";import"./search-Bgp75phS.js";import"./createLucideIcon-DjVjSJaI.js";import"./ClearButton-CmkcnCmv.js";import"./Button-CAN03lh_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhGc7qMk.js";import"./VisuallyHidden-_bN2WTJ0.js";import"./x-B6Hbhj97.js";import"./FieldError-DrWE9U3t.js";import"./Text-EITSTnbM.js";import"./Text-Dyca_2PO.js";import"./RSPContexts-vPfGRekH.js";import"./Collection-O-1H40--.js";import"./index-DrxB_M3o.js";import"./DragAndDrop-BlUoNXWr.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DD3mNoet.js";import"./SelectionManager-CacqYkLH.js";import"./useEvent-pN3Gim4v.js";import"./useDescription-DOmS_boH.js";import"./inertValue-CYZ50sns.js";import"./useHighlightSelectionDescription-BSoi7KgN.js";import"./useUpdateEffect-DnYhW1hI.js";import"./ListKeyboardDelegate-D72G1Amn.js";import"./useHasTabbableChild-DBz0yRF-.js";import"./Checkbox-K7Iy4I3S.js";import"./Form-BimzuEmh.js";import"./check-iLRD4WtY.js";import"./useToggleState-DJkknoJV.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
