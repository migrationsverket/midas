import{r as m,f as l,j as t}from"./iframe-CWKpWNkk.js";import{S as d}from"./SearchField-CDb0QqDo.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cde8Iyy_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DZaHz_Vy.js";import"./clsx-B-dksMZM.js";import"./Form-ClSFU7sX.js";import"./useFocusRing-CpL5jV2W.js";import"./index-B6G90j2w.js";import"./index-ky1MVl1j.js";import"./Input-Dl4b6tmI.js";import"./Hidden-bt019v0w.js";import"./Button-apqjWUoz.js";import"./useLabel-CVerH1Jx.js";import"./useLabels-CpFnq5uL.js";import"./useButton-DMvYi67o.js";import"./FieldError-CQ-FvnYz.js";import"./Text-C7LaV_aB.js";import"./clsx-Ciqy0D92.js";import"./Text-Ds_oVnWP.js";import"./RSPContexts-BCpmha9C.js";import"./Group-C9US1aCF.js";import"./useControlledState-DvoS3sKo.js";import"./useLocalizedStringFormatter-CzLna1TA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CSQ8xXA8.js";import"./useField-CPp_IGdL.js";import"./TextField.module-DdivwlC8.js";import"./search-Ba2RzVyZ.js";import"./createLucideIcon-DmuvpfBU.js";import"./x-BvIy6Ou7.js";import"./useLocalizedStringFormatter-JVYCQbQZ.js";import"./Button-WdsjujPh.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CUqCo7Kt.js";import"./Collection-B8p0MI6F.js";import"./index-DpCjz9aE.js";import"./DragAndDrop-DSJ8AIiX.js";import"./getScrollParent-8ZOlHmZ1.js";import"./scrollIntoView-EiYcHJPI.js";import"./SelectionIndicator-DXuHsU9n.js";import"./SelectionManager-BLRpOlsc.js";import"./useEvent-Bvf1pRIU.js";import"./useDescription-DoPJm1n-.js";import"./inertValue-D0Tb-67e.js";import"./useHighlightSelectionDescription-BCLjXpE-.js";import"./useUpdateEffect-BAAXu-b_.js";import"./ListKeyboardDelegate-EIc5NKm6.js";import"./useHasTabbableChild-9C3zyikp.js";import"./Checkbox-DglGRtgS.js";import"./check-DsRVGfFf.js";import"./useToggleState-ny1TT4OT.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
