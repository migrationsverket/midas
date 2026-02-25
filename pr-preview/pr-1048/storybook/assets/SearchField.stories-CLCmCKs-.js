import{r as m,f as l,j as t}from"./iframe-BIYycVtF.js";import{S as d}from"./SearchField-DdlyOjfl.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-3MJcxK25.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C6aaDo-s.js";import"./useObjectRef-Dnttuos9.js";import"./useLocalizedStringFormatter-BW8yoNsi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D41AFEDa.js";import"./useFocusRing-_u8e-JUw.js";import"./useFocusable-DRoMEDqQ.js";import"./index-CH0u5tNJ.js";import"./index-Dx5ixs9i.js";import"./useFormValidation-CJX6c1NG.js";import"./useField-BJy-oEwD.js";import"./Button-xCxR0kSd.js";import"./utils-CQyQJNz7.js";import"./Hidden-AGqSstUV.js";import"./useLabels-DC_FEenW.js";import"./useButton-BNdOFr74.js";import"./search-DWwaHMq3.js";import"./createLucideIcon-S6aGlHi1.js";import"./ClearButton-DoqMW884.js";import"./Button-D9Any6-B.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BKDdPfco.js";import"./VisuallyHidden-CK9a4W9O.js";import"./x-CohE59zs.js";import"./FieldError-BsWqYage.js";import"./Text-A1nWhzuO.js";import"./Text-B1YyVTq1.js";import"./RSPContexts-B6TKKvZV.js";import"./Collection-emX73nrZ.js";import"./CollectionBuilder-5cVLOiMR.js";import"./index-2x7kCp5n.js";import"./DragAndDrop-G6PSS7RK.js";import"./getScrollParent-BVUiVP-B.js";import"./scrollIntoView-Bo1Xab6M.js";import"./SelectionIndicator-qZAjNlSO.js";import"./SelectionManager-EfHU5LpS.js";import"./useEvent-B9CnIbJl.js";import"./useDescription-DVfA0GtU.js";import"./inertValue-DZywz7RT.js";import"./useHighlightSelectionDescription-Dt6VdG4k.js";import"./useUpdateEffect-BXnz-Ik9.js";import"./ListKeyboardDelegate-C3gxtFmw.js";import"./useHasTabbableChild-CudXizk7.js";import"./Checkbox-tgrDSnbu.js";import"./Form-CvaXZ-x_.js";import"./check-CRNy0lPB.js";import"./useToggleState-BNEroOSs.js";const ge={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,p]=m.useState(""),[s]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=s.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:p,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const be=["SimpleSearch"];export{i as SimpleSearch,be as __namedExportsOrder,ge as default};
