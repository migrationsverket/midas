import{r as m,f as l,j as t}from"./iframe-DHSFkIsy.js";import{S as d}from"./SearchField-N0qpi61f.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-nCj3lry2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CZbTr4bL.js";import"./clsx-B-dksMZM.js";import"./Form-C4OsrVJ1.js";import"./useFocusRing-CNpZwhdZ.js";import"./index-oXf-9ID4.js";import"./index-J1_Mq2EC.js";import"./Input-MzB543d8.js";import"./Hidden-N-s-Oc-P.js";import"./Button-DwFLZ-vl.js";import"./useLabel-BCJ-n4cN.js";import"./useLabels-CTlVno2m.js";import"./useButton-tAptgANb.js";import"./FieldError-DFzLFMIZ.js";import"./Text-Dlktz5kY.js";import"./clsx-Ciqy0D92.js";import"./Text-CE2-J5ib.js";import"./RSPContexts-Dm3G7A6M.js";import"./Group-GTWQChIb.js";import"./useControlledState-BC5iZhUu.js";import"./useLocalizedStringFormatter-CrmHRQiX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CzfnvZVK.js";import"./useField-CmEVGEa7.js";import"./TextField.module-DdivwlC8.js";import"./search-TeCVRAI6.js";import"./createLucideIcon-Bhv8-C3S.js";import"./x-Ca2lmhP_.js";import"./useLocalizedStringFormatter-AT5R_CzH.js";import"./Button-BCxQv38d.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CdVi298y.js";import"./Collection-B0B2WoeJ.js";import"./index-CqWHgfao.js";import"./DragAndDrop-DGzQ5aRG.js";import"./getScrollParent-HtTQIod0.js";import"./scrollIntoView-DmtYx3D8.js";import"./SelectionIndicator-CydRsdFr.js";import"./SelectionManager-JKYT7One.js";import"./useEvent-DMc3Uz1U.js";import"./useDescription-COddip1D.js";import"./inertValue-CQrmE3MS.js";import"./useHighlightSelectionDescription-BqYgndVX.js";import"./useUpdateEffect-d7ShU32-.js";import"./ListKeyboardDelegate-3IFiTk9z.js";import"./useHasTabbableChild-DvCi9Y9P.js";import"./Checkbox-CZI43qn4.js";import"./check-CRC59qvK.js";import"./useToggleState-jrUwv18p.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
