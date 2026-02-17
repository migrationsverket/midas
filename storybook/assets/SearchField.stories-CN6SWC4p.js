import{r as m,f as l,j as t}from"./iframe-D4Gvrs9r.js";import{S as d}from"./SearchField-DcDwdMKe.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B8UlhB0N.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BxrHLQLL.js";import"./utils-DgLFYAtQ.js";import"./useLocalizedStringFormatter-C406VONV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BIe-c23M.js";import"./useFocusRing-Cb3CZ-aE.js";import"./index-6UveYWg_.js";import"./index-DkaKCeuE.js";import"./useFormValidation-CwQ_rSHp.js";import"./useField-BR9XxUx2.js";import"./Button-BokCFgRi.js";import"./Hidden-Fg0nOe1J.js";import"./useLabels-d4KXrv_2.js";import"./useButton-BedLEyIe.js";import"./search-DH0vC1um.js";import"./createLucideIcon-BxZcqrlQ.js";import"./ClearButton-BSmxlXAd.js";import"./Button-CGGZxAPK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BFXwxmG8.js";import"./VisuallyHidden-DsUdzhfv.js";import"./x-De-PNzK7.js";import"./FieldError-BLkIz_DJ.js";import"./Text-9OpdE2KE.js";import"./Text-DPs03w0L.js";import"./RSPContexts-Czq_pnVN.js";import"./Collection-hZrEm5m1.js";import"./index-CmIIKAbh.js";import"./DragAndDrop-CCdXxF60.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BIxjpXf9.js";import"./SelectionManager-DFet17wD.js";import"./useEvent-BCx0YIxG.js";import"./useDescription-CaLH3whp.js";import"./inertValue-DbCpIESS.js";import"./useHighlightSelectionDescription-KHhmAoKW.js";import"./useUpdateEffect-BDWGf2Me.js";import"./ListKeyboardDelegate-DJnjR6Kz.js";import"./useHasTabbableChild-v7-oLx4W.js";import"./Checkbox-Dafw5WIf.js";import"./Form-BfdGIWU_.js";import"./check-CDPJeYWc.js";import"./useToggleState-C6Car7gE.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
