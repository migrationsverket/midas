import{r as m,f as l,j as t}from"./iframe-Cf0gSBlV.js";import{S as d}from"./SearchField-DZnDSn0q.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CTxbKjOy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D5wiuCjg.js";import"./clsx-B-dksMZM.js";import"./Form-DCo445Pj.js";import"./useFocusRing-CU4h4oO2.js";import"./index-Cq4gtJu1.js";import"./index-BGK7RvPC.js";import"./Input-CUY3jdGx.js";import"./Hidden-BBPU8yn5.js";import"./Button-lgeK8kME.js";import"./useLabel-tj1Q-TRL.js";import"./useLabels-CtzpOF36.js";import"./useButton-BvfyWom1.js";import"./FieldError-qRtSRcyk.js";import"./Text-DVsPk7Go.js";import"./clsx-Ciqy0D92.js";import"./Text-BVKObbzr.js";import"./RSPContexts-hWKFxDS1.js";import"./Group-BCogxFI0.js";import"./useControlledState-CCD2Jo-X.js";import"./useLocalizedStringFormatter-jI7Oi0kB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bnv86E77.js";import"./useField-BL9qEMGH.js";import"./TextField.module-DdivwlC8.js";import"./search-DqrRij_0.js";import"./createLucideIcon-CuxZToxj.js";import"./x-gM8dBxSk.js";import"./useLocalizedStringFormatter-BePTNged.js";import"./Button-t2ToDX_o.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Qxum1xZt.js";import"./Collection-B0lLxu9D.js";import"./index-DS3qhvBb.js";import"./DragAndDrop-FmbkC9vL.js";import"./getScrollParent-DJJhTJvR.js";import"./scrollIntoView-C0W73uc3.js";import"./SelectionIndicator-C0NvYuKl.js";import"./SelectionManager-BuxsMIzv.js";import"./useEvent-y-qPMRaI.js";import"./useDescription-M0SxojFs.js";import"./inertValue-DGmfXvtW.js";import"./useHighlightSelectionDescription-CvXeCnYi.js";import"./useUpdateEffect-DTfBysFi.js";import"./ListKeyboardDelegate-B0W0pQHS.js";import"./useHasTabbableChild-B0FfotYG.js";import"./Checkbox-CaqiK0wo.js";import"./check-Cv1Osn94.js";import"./useToggleState-BaxRdh6q.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
