import{r as m,f as l,j as t}from"./iframe-BZXvBH-F.js";import{S as d}from"./SearchField-CMg1RoPX.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dc_tmNLb.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-92nob15h.js";import"./utils-D0cahHWr.js";import"./useLocalizedStringFormatter-CZJb1YX-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DGYj0rNN.js";import"./useFocusRing-BIld4Qij.js";import"./index-DMx_9hj9.js";import"./index-BV9gomH3.js";import"./useFormValidation-M8hBmAjU.js";import"./useField-BVbxo933.js";import"./Button-qgUbEQ-x.js";import"./Hidden-BnqtCAFp.js";import"./useLabels-D7ZAiJsb.js";import"./useButton-DYEcZB5q.js";import"./search-BDTDTBXQ.js";import"./createLucideIcon-DZcmQE6C.js";import"./ClearButton-Dz2qCf8H.js";import"./Button-fGCQSPeO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BMdn7775.js";import"./VisuallyHidden-BrTCLNZ6.js";import"./x-Wf_arxs9.js";import"./FieldError-BKwMNI7Z.js";import"./Text-HwH_WpJH.js";import"./Text-u8_6XOdU.js";import"./RSPContexts-BaMpnc-i.js";import"./Collection-YMyUPTpt.js";import"./index-B2buEDzq.js";import"./DragAndDrop-BaulCBYk.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BQPW2A8r.js";import"./SelectionManager-CFTjhDPB.js";import"./useEvent-Ba2kTEre.js";import"./useDescription-yvRYLG0u.js";import"./inertValue-C7LXBFuD.js";import"./useHighlightSelectionDescription-B-Q0MiSn.js";import"./useUpdateEffect-C7LZs1Pk.js";import"./ListKeyboardDelegate-Bt21Vwxh.js";import"./useHasTabbableChild-BJNmdckD.js";import"./Checkbox-DRlcAe_E.js";import"./Form-ColHnssL.js";import"./check-ChQCdtYO.js";import"./useToggleState-DmkBLLG0.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
