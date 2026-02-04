import{r as m,f as l,j as t}from"./iframe-CtlzUTic.js";import{S as d}from"./SearchField-BpmObRKH.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C4EfFFPT.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CfbZjGvX.js";import"./utils-Be0LSfA6.js";import"./useLocalizedStringFormatter-C0z3Bv7k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DOKiG94a.js";import"./useFocusRing-DJMLYrjC.js";import"./index-E52zMlCa.js";import"./index-5SHCtBg6.js";import"./useFormValidation-CxR3xnZI.js";import"./useField-jOtxtfA7.js";import"./Button-DH5UoxLr.js";import"./Hidden-DGVzl5uY.js";import"./useLabels-BgCIJPu_.js";import"./useButton-DSvEAlkb.js";import"./search-BiunwiGb.js";import"./createLucideIcon-DLRJv2UH.js";import"./ClearButton-C7hHd_Ho.js";import"./Button-Ki9bkVZp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-eyJdwfwF.js";import"./VisuallyHidden-CQrctRJU.js";import"./x-DPwbIeop.js";import"./FieldError-B85O3F2_.js";import"./Text-BW699DP7.js";import"./Text-DzgVGaDU.js";import"./RSPContexts-CQZGhvKo.js";import"./Collection-ZWhUlmEB.js";import"./index-BxlIXLxQ.js";import"./DragAndDrop-BteJbP7d.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BxaIduyJ.js";import"./SelectionManager-CbX-eWig.js";import"./useEvent-7Vlz65b-.js";import"./useDescription-DnlIBvPV.js";import"./inertValue-BqIVJqax.js";import"./useHighlightSelectionDescription-BuB7GsrO.js";import"./useUpdateEffect-CkPJ9kZ3.js";import"./ListKeyboardDelegate-lZINxfqG.js";import"./useHasTabbableChild-C0-hRaav.js";import"./Checkbox-BadmrqDz.js";import"./Form-UrwxiUY0.js";import"./check-CZnb4MBd.js";import"./useToggleState-Cm7ngC4r.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
