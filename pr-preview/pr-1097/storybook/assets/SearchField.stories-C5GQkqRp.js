import{r as m,f as l,j as t}from"./iframe-BULWFXB5.js";import{S as d}from"./SearchField-D7_HNMKI.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C6xsImWp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BW5BQp7c.js";import"./utils-BypaegC2.js";import"./useLocalizedStringFormatter-Eb1GNK_U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CpWqU1eE.js";import"./useFocusRing-BQjr63hK.js";import"./index-Bq_n1hpv.js";import"./index-CB-9tr3l.js";import"./useFormValidation-BnhRbTsd.js";import"./useField-Da10gebg.js";import"./Button-DlgELQyz.js";import"./Hidden-iwjRZV6c.js";import"./useLabels-CYw97kiM.js";import"./useButton-CjhJKsMh.js";import"./search-k4zNrj8o.js";import"./createLucideIcon-Ch4Yrygv.js";import"./ClearButton-DA00wPdL.js";import"./Button-DuCjaiZE.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B5QzfwUv.js";import"./VisuallyHidden-D8sOhpgS.js";import"./x-oHK0ncrQ.js";import"./FieldError-C4OBGurV.js";import"./Text--sxnixpG.js";import"./Text-DuTR7tq0.js";import"./RSPContexts-p83zhHcS.js";import"./Collection-DBptuMbt.js";import"./index-HIf1MFds.js";import"./DragAndDrop-CqNLlWpo.js";import"./getScrollParent-BKMesRpb.js";import"./scrollIntoView-DAGd27OM.js";import"./SelectionIndicator-bTKIb-VQ.js";import"./SelectionManager-Dv0G0Tlv.js";import"./useEvent-P8B_Gb_H.js";import"./useDescription-DGIlMGbp.js";import"./inertValue-Bq8Zub17.js";import"./useHighlightSelectionDescription-D-rIRBuB.js";import"./useUpdateEffect-BGZbUXI-.js";import"./ListKeyboardDelegate-CcolMQIW.js";import"./useHasTabbableChild-DmvMp1IX.js";import"./Checkbox-k7mZfrEv.js";import"./Form-GTo_fkTX.js";import"./check-DpQFVNoC.js";import"./useToggleState-DlXLfDmY.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
