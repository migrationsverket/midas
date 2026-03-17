import{r as m,f as l,j as t}from"./iframe-Bwfgw8pk.js";import{S as d}from"./SearchField-yKW3kP2O.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-dsh-NTHI.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-iPtiFsr4.js";import"./utils-BYZTfypc.js";import"./useLocalizedStringFormatter-CQ1hUGUd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DzJC1fGe.js";import"./useFocusRing-cRFXK4sJ.js";import"./index-D1I53Bzg.js";import"./index-VSa-88v0.js";import"./useFormValidation-Szp1BRKK.js";import"./useField-DeuwejZf.js";import"./Button-BsV8k1dg.js";import"./Hidden-C55orz_R.js";import"./useLabels-BW9zsbr2.js";import"./useButton-CETvSTMc.js";import"./search-DMZItRWB.js";import"./createLucideIcon-BSOfHJOH.js";import"./ClearButton-RAPd_-vH.js";import"./x-CMFzoPcG.js";import"./Button-Cc79re0B.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Du3bV9_E.js";import"./VisuallyHidden-B9CGtyyD.js";import"./FieldError-rZWlknNl.js";import"./Text-CHrquvV0.js";import"./Text-COMr0RdB.js";import"./RSPContexts-DoSu8nwv.js";import"./Collection-Did71HL7.js";import"./index-CWidqN52.js";import"./DragAndDrop-BnIumXYt.js";import"./getScrollParent-BLupYbMm.js";import"./scrollIntoView-DORWTWY7.js";import"./SelectionIndicator-CbPDFvK6.js";import"./SelectionManager-BneQkNS9.js";import"./useEvent-DV0ae6Un.js";import"./useDescription-DGPUAMqe.js";import"./inertValue-CwhL9hob.js";import"./useHighlightSelectionDescription-CeqB7npQ.js";import"./useUpdateEffect-C7MJYdS-.js";import"./ListKeyboardDelegate-DWcO9r8m.js";import"./useHasTabbableChild-DCogyMKR.js";import"./Checkbox-CqxmsB2F.js";import"./Form-B-uJv9__.js";import"./check-D-RY-oRQ.js";import"./useToggleState-C1yhjaE9.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
