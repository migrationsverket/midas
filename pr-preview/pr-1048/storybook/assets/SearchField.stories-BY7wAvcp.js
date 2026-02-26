import{r as m,f as l,j as t}from"./iframe-C1J9c0Wx.js";import{S as d}from"./SearchField-rHueiefx.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CSuzgumT.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CSlbmBUy.js";import"./useObjectRef-DApwTN-e.js";import"./useLocalizedStringFormatter-DwMRkuit.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DCNReJvn.js";import"./useFocusRing-DnL4kdEi.js";import"./useFocusable-DpJQLcZ9.js";import"./index-DyM7miu3.js";import"./index-D1okWCVE.js";import"./useFormValidation-82wx0tZJ.js";import"./useField-BlvEMn1u.js";import"./Button-sRVT8Zzh.js";import"./utils-D-Kximqc.js";import"./Hidden-D_HMLWkk.js";import"./useLabels-BM_CzPRL.js";import"./useButton-D6tu_qKw.js";import"./search-fahzqp37.js";import"./createLucideIcon-CAqL_OOk.js";import"./ClearButton-Cm0sJJkV.js";import"./Button-oYildcGz.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-xPxlWEwQ.js";import"./VisuallyHidden-DFJgjeMD.js";import"./x-CwCncDXT.js";import"./FieldError-C498Gxi4.js";import"./Text-CWSZibPG.js";import"./Text-LXNgL2Cy.js";import"./RSPContexts-C4ZFOry7.js";import"./Collection-ChhYsuGg.js";import"./CollectionBuilder-CdQw54P_.js";import"./index-Ceu5-9yq.js";import"./DragAndDrop-fZ-ftEWZ.js";import"./getScrollParent-D4l3WZmm.js";import"./scrollIntoView-2xpKk0tJ.js";import"./SelectionIndicator-BeIhecxz.js";import"./SelectionManager-DBwoGUos.js";import"./useEvent-7oArEk9L.js";import"./useDescription-Dqtl0cRO.js";import"./inertValue-ClGBWDYI.js";import"./useHighlightSelectionDescription-vi6ePvn5.js";import"./useUpdateEffect-B-T-NI_Q.js";import"./ListKeyboardDelegate-DDMkrUyD.js";import"./useHasTabbableChild-C26BhBo9.js";import"./Checkbox-DBAbC-e0.js";import"./Form-C5GBig5g.js";import"./check-CmY1juhG.js";import"./useToggleState-dkkErGKL.js";const ge={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,p]=m.useState(""),[s]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=s.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:p,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
