import{r as m,f as l,j as t}from"./iframe-Drr84aUp.js";import{S as d}from"./SearchField-DCdYMtm7.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BBVANxY8.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ORv1HaqW.js";import"./utils-Dj0d5knJ.js";import"./useLocalizedStringFormatter-DKpj8BBI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CbABvNjY.js";import"./useFocusRing-DsIGSL5O.js";import"./index-BiBbK_-6.js";import"./index-DRbaHGaR.js";import"./useFormValidation-D143NhVz.js";import"./useField-DFKc8azI.js";import"./Button-CwulGWpP.js";import"./Hidden-BeHVocu4.js";import"./useLabels-CW04P3B1.js";import"./useButton-ByV_k0-w.js";import"./search-Cgl9QKOF.js";import"./createLucideIcon-BYlUtrd2.js";import"./ClearButton-DfccChjf.js";import"./Button-BXBCvuas.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DN0Qnrca.js";import"./VisuallyHidden-BX3HTr1q.js";import"./x-BaHWGiCm.js";import"./FieldError-799sXCos.js";import"./Text-Dr4vVF01.js";import"./Text-v7lTDwJ8.js";import"./RSPContexts-SjihynDA.js";import"./Collection-DkshQO2P.js";import"./index-Cgdv7bIq.js";import"./DragAndDrop-9lMV_lZ1.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Daf2cBJU.js";import"./SelectionManager-DMZwZ-vi.js";import"./useEvent-DtfVww8C.js";import"./useDescription-DocMBm6g.js";import"./inertValue-BsiEPn0K.js";import"./useHighlightSelectionDescription-DR-mbBsG.js";import"./useUpdateEffect-BsBaxDMt.js";import"./ListKeyboardDelegate-DiJbBaOx.js";import"./useHasTabbableChild-C4rciiNo.js";import"./Checkbox-Cur7lHDo.js";import"./Form-BeBEjZhh.js";import"./check-CG5JpCep.js";import"./useToggleState-CoBGO6Jx.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
