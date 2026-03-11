import{r as m,f as l,j as t}from"./iframe-BxhzVfg2.js";import{S as d}from"./SearchField-SwYdAhm4.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-JDUbUHXf.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CD2bBDu6.js";import"./utils-DZ6ahdJp.js";import"./useLocalizedStringFormatter-DBjxKF2m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DzoR-Tga.js";import"./useFocusRing-bIPgWBhX.js";import"./index-BdD9_fMh.js";import"./index-BQnXjsO_.js";import"./useFormValidation-CovvDpdr.js";import"./useField-D0R3_hHU.js";import"./Button-BWZAZeiF.js";import"./Hidden-DbfZ_4s1.js";import"./useLabels-D-t3MvLa.js";import"./useButton-BdPz5CFW.js";import"./search-BZEV0Cm0.js";import"./createLucideIcon-B9VWei3c.js";import"./ClearButton-Dhs77Cdd.js";import"./Button-DVCkWjV4.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C--O9Jox.js";import"./VisuallyHidden-CI9pT65P.js";import"./x-DcnHgmtQ.js";import"./FieldError-0WAd1Y6E.js";import"./Text-DJy4h6GN.js";import"./Text-0UCV12dD.js";import"./RSPContexts-6uyhJgkS.js";import"./Collection-CEh8H5R4.js";import"./index-Bka3Lxbj.js";import"./DragAndDrop-C4RJwtUY.js";import"./getScrollParent-RVUz05Tj.js";import"./scrollIntoView-BP0QIdto.js";import"./SelectionIndicator-eisYCPgp.js";import"./SelectionManager-Bw1pNtXG.js";import"./useEvent-Db77X8Ds.js";import"./useDescription-BuazjX7t.js";import"./inertValue-Ctf1J83V.js";import"./useHighlightSelectionDescription-Cxkgbe8i.js";import"./useUpdateEffect-DsFAwvYG.js";import"./ListKeyboardDelegate-B7qWljEu.js";import"./useHasTabbableChild-C-cgVBma.js";import"./Checkbox-CMEoWMWf.js";import"./Form-CSuUxMvQ.js";import"./check-BhSWQBFZ.js";import"./useToggleState-9JidhOI6.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
