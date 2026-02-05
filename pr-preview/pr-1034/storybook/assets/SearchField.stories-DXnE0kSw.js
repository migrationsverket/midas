import{r as m,f as l,j as t}from"./iframe-HG_Z2pg-.js";import{S as d}from"./SearchField-B65DFQ6p.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-e84X3LMn.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-sKIB1QYe.js";import"./utils-CdY9616D.js";import"./useLocalizedStringFormatter-C17LFZpf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-De_IytUE.js";import"./useFocusRing-C2pNSdUj.js";import"./index-CMaq89o6.js";import"./index-iNkvpkXc.js";import"./useFormValidation-ATFip75W.js";import"./useField-CLeAY4am.js";import"./Button-DAM_PuZi.js";import"./Hidden-BkYvshkQ.js";import"./useLabels-CYZjihjK.js";import"./useButton-gu6J6a7T.js";import"./search-su8D8EcM.js";import"./createLucideIcon-CkaE1DwA.js";import"./ClearButton-Bfbx1xTa.js";import"./Button-C-MBQNdi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DYUm24Kr.js";import"./VisuallyHidden-L0YDRZd4.js";import"./x-DjjH4U3w.js";import"./FieldError-CD7fxHOi.js";import"./Text-CPFj8IEW.js";import"./Text-CKZFwH_2.js";import"./RSPContexts-rEVBiSVI.js";import"./Collection-BSaBUkOh.js";import"./index-CBto2vLy.js";import"./DragAndDrop-DG7iUev2.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CYCN6V3S.js";import"./SelectionManager-DBA4BPE3.js";import"./useEvent-BB0Ydt5c.js";import"./useDescription-BzOv_EiU.js";import"./inertValue-SrJ2kSUf.js";import"./useHighlightSelectionDescription-B93JCDUl.js";import"./useUpdateEffect-DXVQm5aU.js";import"./ListKeyboardDelegate-BvXzhQRP.js";import"./useHasTabbableChild-DP4gnTca.js";import"./Checkbox-B7mm0fkC.js";import"./Form-BEkKZTA7.js";import"./check-DFJE8aty.js";import"./useToggleState-C1N0M4hm.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
