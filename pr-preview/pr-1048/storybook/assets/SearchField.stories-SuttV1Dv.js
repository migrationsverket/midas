import{r as m,f as l,j as t}from"./iframe-DFPNwlkc.js";import{S as d}from"./SearchField-9su-8N96.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DhGk66yg.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DApIq544.js";import"./utils-CV6nHplc.js";import"./useLocalizedStringFormatter-ERBM7yjl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-3j3P3Pcj.js";import"./useFocusRing-BCqmlDXx.js";import"./index-BDUmJqpj.js";import"./index-Dpft1Kq9.js";import"./useFormValidation-CfPOxHPb.js";import"./useField-BGeccqxt.js";import"./Button-DQefDSoE.js";import"./Hidden-D0i80-zA.js";import"./number-DfkVkf0F.js";import"./useLabels-3zYOWwD6.js";import"./useButton-DiLGUc5M.js";import"./search--7zaCKO2.js";import"./createLucideIcon-C-NMhMRQ.js";import"./ClearButton-BTmjrYg7.js";import"./Button-kZACelDn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DCEDmOYO.js";import"./VisuallyHidden-ChW5Sl-W.js";import"./x-Dg7QfrZy.js";import"./FieldError-C5roi1Sk.js";import"./Text-C4FKP_kf.js";import"./Text-tvz73rc8.js";import"./RSPContexts-ZFMplKwB.js";import"./Collection-CAjwM5MA.js";import"./index-0Fley7P3.js";import"./DragAndDrop-BvgeWJJM.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dz4Z4nS2.js";import"./SelectionManager-kIiUcMRw.js";import"./useEvent-D1XNdLaU.js";import"./useDescription-BwrmQFfb.js";import"./inertValue-BBeVQigW.js";import"./useHighlightSelectionDescription-MEGOgd38.js";import"./useUpdateEffect-BOXtwOE3.js";import"./ListKeyboardDelegate-DH_DMwpQ.js";import"./useHasTabbableChild-BpB2K1tK.js";import"./Checkbox-LdDu3HT5.js";import"./Form-DaDSaScW.js";import"./check-D-C0OSSN.js";import"./useToggleState-ct3Xzrxg.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
