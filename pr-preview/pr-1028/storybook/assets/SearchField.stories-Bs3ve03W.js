import{r as m,f as l,j as t}from"./iframe-BhBYd-yz.js";import{S as d}from"./SearchField-GRT9EOEg.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DFtgR-bH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BoIGYg0G.js";import"./utils-dKiMTOip.js";import"./useLocalizedStringFormatter-FWWM_265.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DJyMp3Ou.js";import"./useFocusRing-CTfHsPPf.js";import"./index-Bb1CvUWk.js";import"./index-4IMT8kge.js";import"./useFormValidation-B4ppQ1b7.js";import"./useField-CGcAJZ4v.js";import"./Button-BahhSbHm.js";import"./Hidden-rBTlH4Hd.js";import"./useLabels-WxFJLHTa.js";import"./useButton-CPG29_41.js";import"./search-DiNovcvj.js";import"./createLucideIcon-C3sGvf5y.js";import"./ClearButton-D7r9ZbuX.js";import"./Button-CltQ2OUe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DxUWb3BW.js";import"./VisuallyHidden-C_umXD1b.js";import"./x-CK6S_-0Q.js";import"./FieldError-6GseZL7F.js";import"./Text-Cnf9RaEJ.js";import"./Text-DPMgLSbx.js";import"./RSPContexts-Bop_NSvS.js";import"./Collection-BOgrKMsb.js";import"./index--BoD9glt.js";import"./DragAndDrop-VpDIL5h9.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DwJ1FrM5.js";import"./SelectionManager-CwhmGt3D.js";import"./useEvent-B-Flje4X.js";import"./useDescription-DJAzLegN.js";import"./inertValue-cDsk1i0K.js";import"./useHighlightSelectionDescription-CAtB7bjN.js";import"./useUpdateEffect-8XVjpYUZ.js";import"./ListKeyboardDelegate-Bw4fFRxE.js";import"./useHasTabbableChild-DkVo6tls.js";import"./Checkbox-D-ttFQS5.js";import"./Form-B7gnyP5J.js";import"./check-CYyt5Vv9.js";import"./useToggleState-CE_zRxyc.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
