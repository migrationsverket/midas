import{r as m,f as l,j as t}from"./iframe-y1u__L-8.js";import{S as d}from"./SearchField-LKSwONZt.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BIfEknlF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Da8nMI6o.js";import"./clsx-B-dksMZM.js";import"./Form-CePOgkA4.js";import"./useFocusRing-DrPDMwIf.js";import"./index-sWYRQAk2.js";import"./index-BS1A8_4R.js";import"./Input-Duc0d2AL.js";import"./Hidden-DTarpjft.js";import"./Button-Bmc3JOkJ.js";import"./useLabel-DdR6Ey9N.js";import"./useLabels-DIWDgD-T.js";import"./useButton-DFds5nbV.js";import"./FieldError-B3ZCLrVr.js";import"./Text-LCGDIWeJ.js";import"./clsx-Ciqy0D92.js";import"./Text-DI19gscT.js";import"./RSPContexts-BzgKoUFY.js";import"./Group-rrSAIQbm.js";import"./useControlledState-SL3CCMLy.js";import"./useLocalizedStringFormatter-BaM5UMu5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-dwu892YK.js";import"./useField-DeQcEKMo.js";import"./TextField.module-DdivwlC8.js";import"./search-NgSuTJjD.js";import"./createLucideIcon-C_M4Trqf.js";import"./x-WeprrzHp.js";import"./useLocalizedStringFormatter-BeHCnKuu.js";import"./Button-DsGM-uqm.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-vMJRuQeL.js";import"./Collection-BXQTs4xV.js";import"./index-DpYlLRD4.js";import"./DragAndDrop-CmKgWrzU.js";import"./getScrollParent-DOFnmN7L.js";import"./scrollIntoView-DPjPSgYg.js";import"./SelectionIndicator-Dr5bwis_.js";import"./SelectionManager-C7uieu2B.js";import"./useEvent-BdW-8kO2.js";import"./useDescription-C868_Zy-.js";import"./inertValue-CegHRPzz.js";import"./useHighlightSelectionDescription-CSg2nrFS.js";import"./useUpdateEffect-DtM5mrux.js";import"./ListKeyboardDelegate-CotMEVTu.js";import"./useHasTabbableChild-BflOYvo9.js";import"./Checkbox-DUlQsQoZ.js";import"./check-BGJ1UnCb.js";import"./useToggleState-CgzLupYO.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
