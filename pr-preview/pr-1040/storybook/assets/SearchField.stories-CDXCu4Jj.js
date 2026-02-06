import{r as m,f as l,j as t}from"./iframe-Bu2zzzE-.js";import{S as d}from"./SearchField-BwA5gXCo.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DjFFuwRj.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DGpDrNxO.js";import"./utils-D4qoxq6V.js";import"./useLocalizedStringFormatter-Bgu754vE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dr9sigZv.js";import"./useFocusRing-YWhjqEgC.js";import"./index-B4VLM8wj.js";import"./index-CLepp-yy.js";import"./useFormValidation-CYLG9fgC.js";import"./useField-wWbyNm1N.js";import"./Button-S1cZ3oDo.js";import"./Hidden-B80qSbZA.js";import"./useLabels-CBl0gRZS.js";import"./useButton-D1KNfoAL.js";import"./search-Dgd0HySc.js";import"./createLucideIcon-DOjvHL5l.js";import"./ClearButton-Ds6cbL-7.js";import"./Button-q_TKGLf8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dt6zB3aB.js";import"./VisuallyHidden-DvEZM9Lw.js";import"./x-dhS2SloF.js";import"./FieldError-C-kLbmfj.js";import"./Text-CyZW-0MA.js";import"./Text-CbpLUl1P.js";import"./RSPContexts-DghJNKta.js";import"./Collection-CZk8itpW.js";import"./index-lgmsj2SM.js";import"./DragAndDrop-Cs9V-qh7.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DiW9jQwU.js";import"./SelectionManager-B1dioWQj.js";import"./useEvent-BM4aK4KA.js";import"./useDescription-DN9USHD9.js";import"./inertValue-CT4EsmNv.js";import"./useHighlightSelectionDescription-BYu6kPLF.js";import"./useUpdateEffect-BxmxfV1Y.js";import"./ListKeyboardDelegate-2Wzj6kBl.js";import"./useHasTabbableChild-d06Xt_kK.js";import"./Checkbox-CTviHg7C.js";import"./Form-BrEUFrti.js";import"./check-DZppye7Z.js";import"./useToggleState-D3W7VI4z.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
