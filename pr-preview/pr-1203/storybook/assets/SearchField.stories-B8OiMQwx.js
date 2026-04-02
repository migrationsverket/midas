import{r as m,f as l,j as t}from"./iframe-AjHIFKYL.js";import{S as d}from"./SearchField-BsRUWf4E.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DQWkCotV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQ53D7f7.js";import"./clsx-B-dksMZM.js";import"./Form-Bb5IqlHO.js";import"./useFocusRing-CvHv-Osy.js";import"./index-Cfk7mVij.js";import"./index-BxE46KD8.js";import"./Input-DEbCu7yq.js";import"./Hidden-Ciub7nFQ.js";import"./Button-C1DU2kQ0.js";import"./useLabel-BXU14ybb.js";import"./useLabels-D5qCWeBL.js";import"./useButton-C5zGgHMm.js";import"./FieldError-7pShLjHw.js";import"./Text-CCR6G686.js";import"./clsx-Ciqy0D92.js";import"./Text-pxITg1r8.js";import"./RSPContexts-CcA2FC2H.js";import"./Group-CRjLRbbz.js";import"./useControlledState-DTh410_S.js";import"./useLocalizedStringFormatter-BzByLjfh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CG6uFKFc.js";import"./useField-agvh2JV_.js";import"./TextField.module-DdivwlC8.js";import"./search-BIRaXTgM.js";import"./createLucideIcon-D_tC-MWH.js";import"./x-DuRIyyoz.js";import"./useLocalizedStringFormatter-Can2UqR3.js";import"./Button-BEq-_IjI.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-iv4jmUvN.js";import"./Collection-POb6Sqt7.js";import"./index-2OLboCXY.js";import"./DragAndDrop-Cs_xHwT-.js";import"./getScrollParent-DezySAXs.js";import"./scrollIntoView-DoE9Z2_0.js";import"./SelectionIndicator-Bi2cmx6m.js";import"./SelectionManager-Bf5HZs2x.js";import"./useEvent-CBOR4nAM.js";import"./useDescription-CjzV_vAG.js";import"./inertValue-D8sDYZZ7.js";import"./useHighlightSelectionDescription-CRi3jZEv.js";import"./useUpdateEffect-DFaaaPHz.js";import"./ListKeyboardDelegate-BS7k2kA_.js";import"./useHasTabbableChild-dcymMAoe.js";import"./Checkbox-CBfxYLj6.js";import"./check-mCX9aWKL.js";import"./useToggleState-DgZBM1pe.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
