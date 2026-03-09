import{r as m,f as l,j as t}from"./iframe-CHgot2X7.js";import{S as d}from"./SearchField-D_jGD35m.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-ChQgRAT2.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CTq5bkOP.js";import"./utils-DQgfFqY2.js";import"./useLocalizedStringFormatter-BwcUD0xm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C0Ajqqzx.js";import"./useFocusRing-DV-BAEmR.js";import"./index-CmxdV0gr.js";import"./index-BY5gyNOq.js";import"./useFormValidation-v3AvI7jc.js";import"./useField-BZRMc2W1.js";import"./Button-0zMY2rUc.js";import"./Hidden-CqaFLcD3.js";import"./useLabels-XlyeLMQd.js";import"./useButton-DTMPsQ98.js";import"./search-BzlAuhUD.js";import"./createLucideIcon-Bs877ZR1.js";import"./ClearButton-DExZ4tR4.js";import"./Button-CgoLRGMY.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DCHR-uXl.js";import"./VisuallyHidden-D0onDKtY.js";import"./x-C_oBXl7X.js";import"./FieldError-BKJs5LOX.js";import"./Text-DCyFtYSi.js";import"./Text-CLrr9WjV.js";import"./RSPContexts-BcdrHj2t.js";import"./Collection-De4nOpoc.js";import"./index-DGKLvn2p.js";import"./DragAndDrop-D_Tb6590.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BRFiO61M.js";import"./SelectionManager-BXnldiX1.js";import"./useEvent-Bgs3fgM1.js";import"./useDescription-Cv6ZH6Jp.js";import"./inertValue-Jfb1CTGu.js";import"./useHighlightSelectionDescription-Bhu4X7Gp.js";import"./useUpdateEffect-2lZDq6Xh.js";import"./ListKeyboardDelegate-6qlMLgr0.js";import"./useHasTabbableChild-C7nNbCzd.js";import"./Checkbox-CDLrnTFR.js";import"./Form-Dni3IVjn.js";import"./check-D7SmkhHv.js";import"./useToggleState-XRbwlK2I.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
