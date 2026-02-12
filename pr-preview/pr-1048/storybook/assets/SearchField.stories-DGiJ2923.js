import{r as m,f as l,j as t}from"./iframe-MVim3oui.js";import{S as d}from"./SearchField-DnvRLfw0.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CrujocZ-.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BAKDmaF6.js";import"./utils-GfAQeq6-.js";import"./useLocalizedStringFormatter-BVBlcDTw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-lYiDoqub.js";import"./useFocusRing-DsxBFZ5w.js";import"./index-DV_xb9Te.js";import"./index-BgBUqlNN.js";import"./useFormValidation-I8DYeMuj.js";import"./useField-DBjxyUYg.js";import"./Button-gb006erw.js";import"./Hidden-BnPFK6GE.js";import"./number-DfkVkf0F.js";import"./useLabels-CDhm4meR.js";import"./useButton-BYX1uAmK.js";import"./search-CQkUNvY-.js";import"./createLucideIcon-DbJYazUv.js";import"./ClearButton-CNcSIIGA.js";import"./Button-DXLRWKWN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CQ2i-Pxa.js";import"./VisuallyHidden-D4ii-ukQ.js";import"./x-5DuCkJ-_.js";import"./FieldError-BDvc8nCv.js";import"./Text-CK8mjed6.js";import"./Text-BRJKcgIb.js";import"./RSPContexts-CtooKiU1.js";import"./Collection-D1rnK3KC.js";import"./index-CoAcmiIB.js";import"./DragAndDrop-tG-gapoK.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CgPVTL_o.js";import"./SelectionManager-o82G2AiP.js";import"./useEvent-BkJEM1S7.js";import"./useDescription-DDMJG_rN.js";import"./inertValue-KFNe05NT.js";import"./useHighlightSelectionDescription-DoZDAlXJ.js";import"./useUpdateEffect-Bek8YayL.js";import"./ListKeyboardDelegate-CQxknM_9.js";import"./useHasTabbableChild-D3Hz962q.js";import"./Checkbox-7rs4uo9F.js";import"./Form-BvWBeI3H.js";import"./check-DaMhjUgo.js";import"./useToggleState-CFMIZmUC.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
