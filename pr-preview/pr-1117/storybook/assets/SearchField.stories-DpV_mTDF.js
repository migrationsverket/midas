import{r as m,f as l,j as t}from"./iframe-CNCfLPs3.js";import{S as d}from"./SearchField-CLFblhHu.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BbQotzY6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-e7FQN5yO.js";import"./clsx-B-dksMZM.js";import"./Form-9gVNWF04.js";import"./useFocusRing-CUoBtFMe.js";import"./index-BHVmJuNO.js";import"./index-CnTOG63q.js";import"./Input-DDbN1Lhg.js";import"./Hidden-CtoRdWlv.js";import"./Button-BEZ5_JXL.js";import"./useLabels-dz24dBNN.js";import"./useButton-Bz3E-ByR.js";import"./FieldError-R8U9vf-q.js";import"./Text-CBvTFJIS.js";import"./clsx-Ciqy0D92.js";import"./Text-o_j_xe-L.js";import"./RSPContexts-BnqYv-3I.js";import"./Group-C1_TooTY.js";import"./useControlledState-D13ccspj.js";import"./useLocalizedStringFormatter-CmzWN2-U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B765ZhEH.js";import"./useField-Bqm8EBTl.js";import"./TextField.module-DdivwlC8.js";import"./search-CBnt3Ikb.js";import"./createLucideIcon-Fn0POOLU.js";import"./x-BvtqgiYK.js";import"./useLocalizedStringFormatter-BTk8Kzh-.js";import"./Button-OnAqZWBY.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cq4Z2n0K.js";import"./Collection-D01OqlV7.js";import"./index-CLQacGmR.js";import"./DragAndDrop-qXK4Nu7y.js";import"./getScrollParent-F6A2WJl-.js";import"./scrollIntoView-Crvi9te9.js";import"./SelectionIndicator-DulXOkPK.js";import"./SelectionManager-CaxbLyMN.js";import"./useEvent-DnGFAjoz.js";import"./useDescription-C9T5AWLx.js";import"./inertValue-BpphnL0C.js";import"./useHighlightSelectionDescription-DnWlRW20.js";import"./useUpdateEffect-B1MJK651.js";import"./ListKeyboardDelegate-grn2ESRe.js";import"./useHasTabbableChild-Bu6ixfYV.js";import"./Checkbox-D1VVT2Ke.js";import"./check-4F4wkTFN.js";import"./useToggleState-vCRo0epq.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
