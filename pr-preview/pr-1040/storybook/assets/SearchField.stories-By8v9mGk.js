import{r as m,f as l,j as t}from"./iframe-BtNJMoHI.js";import{S as d}from"./SearchField-B2cjHG0t.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-olYzUjZ7.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CgZyRzUC.js";import"./utils-BTcjIN4e.js";import"./useLocalizedStringFormatter-DhOOgyIy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DikHFKAL.js";import"./useFocusRing-B5Ii0CSA.js";import"./index-mJuBdKXF.js";import"./index-DwYe5WTW.js";import"./useFormValidation-CY8g3EHX.js";import"./useField-D54wfcNo.js";import"./Button-DhLs1vMJ.js";import"./Hidden-Ceg14RrY.js";import"./useLabels-CxeRtDFx.js";import"./useButton-Ddodp3Ah.js";import"./search-CTOMgJ0x.js";import"./createLucideIcon-D27Pl-Vx.js";import"./ClearButton-BH4lWv3n.js";import"./Button-BhgL-jXP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DSEZ_sfA.js";import"./VisuallyHidden-BkS4_cE1.js";import"./x-BFzEcC91.js";import"./FieldError-Xit4Yszo.js";import"./Text-BGME6aJP.js";import"./Text-OgZoRIHX.js";import"./RSPContexts-BF7VHJM2.js";import"./Collection-B0yDbE1N.js";import"./index-CX_QFml9.js";import"./DragAndDrop-DLm_bMTa.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CkTj0W0H.js";import"./SelectionManager-CTH9w17B.js";import"./useEvent-lAZ0Ls88.js";import"./useDescription-aGP4GkA6.js";import"./inertValue-CUdesoV4.js";import"./useHighlightSelectionDescription--LwtXAtu.js";import"./useUpdateEffect-B5vnx2BU.js";import"./ListKeyboardDelegate-CVsR5zae.js";import"./useHasTabbableChild-DXnVSaTk.js";import"./Checkbox-CAM6orQM.js";import"./Form-D6rhWoht.js";import"./check-DJ8MbCIO.js";import"./useToggleState-HAOam8d2.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
