import{r as m,f as l,j as t}from"./iframe-DMnXhvY8.js";import{S as d}from"./SearchField-BqhXx1MQ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DVxjQuTZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-4XYSNIgm.js";import"./utils-Cr6fPQeE.js";import"./useLocalizedStringFormatter-BVxr3gfN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BuMNl-g1.js";import"./useFocusRing-8otf3cSz.js";import"./index-DAqnwmB7.js";import"./index-DIi78pwy.js";import"./useFormValidation-ByGzq6xW.js";import"./useField-DY-_TNf0.js";import"./Button-D4fHUSQK.js";import"./Hidden-DPa8I1Gp.js";import"./useLabels-B1zcB8t6.js";import"./useButton-DHyzBCn2.js";import"./search-Am538FF6.js";import"./createLucideIcon-DykDHhyw.js";import"./ClearButton-DMMFh5DU.js";import"./Button-E5A4z9FY.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DxRi-Ufl.js";import"./VisuallyHidden-C2H7BXVT.js";import"./x-CRcPQVxQ.js";import"./FieldError-iahkZMae.js";import"./Text-DMCoF6zG.js";import"./Text-CFJ7Rv8f.js";import"./RSPContexts-KhvNbaiD.js";import"./Collection-CLg-pTOV.js";import"./index-DPCanXGU.js";import"./DragAndDrop-DCF1xeIr.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CLOiqyn5.js";import"./SelectionManager-GiV4_WOF.js";import"./useEvent-hoUK_fBs.js";import"./useDescription-UUruAZG-.js";import"./inertValue-lGa6KLvE.js";import"./useHighlightSelectionDescription-h-11LVKp.js";import"./useUpdateEffect-DQLwigqB.js";import"./ListKeyboardDelegate-BdgHwj63.js";import"./useHasTabbableChild-C-2inh79.js";import"./Checkbox-D38BTEYG.js";import"./Form-BFZEhpvQ.js";import"./check-CYLHI8GM.js";import"./useToggleState-31AcSgWL.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
