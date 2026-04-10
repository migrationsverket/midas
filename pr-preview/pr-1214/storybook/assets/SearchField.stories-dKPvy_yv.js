import{r as m,i as l,j as t}from"./iframe-O2McX3yB.js";import{S as d}from"./SearchField-B9kUV17I.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CHFeOagB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DO-wSHzc.js";import"./clsx-B-dksMZM.js";import"./Form-CM6Fo3tM.js";import"./useFocusRing-C_4jX8C9.js";import"./index-DgGltmSJ.js";import"./index-DYmc9y-m.js";import"./Input-KNFPZfcO.js";import"./Hidden-kbzwSHo-.js";import"./Button-2hnImx6E.js";import"./useLabel-Crm93zgP.js";import"./useLabels-CAQMy46X.js";import"./useButton-DSHOccpc.js";import"./FieldError-CWyB2qd4.js";import"./Text-7Ipy1BR9.js";import"./clsx-Ciqy0D92.js";import"./Text-YZ7QSVuR.js";import"./RSPContexts-D9PIXrmH.js";import"./Group-DIMSG4ag.js";import"./useControlledState-CDscPa5k.js";import"./useLocalizedStringFormatter-DIk6ZtyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D567ds9S.js";import"./useField-CdhU-8jB.js";import"./TextField.module-DdivwlC8.js";import"./search-Bxjr7PnI.js";import"./createLucideIcon-C4xn0wXs.js";import"./x-Bexz8DwZ.js";import"./useLocalizedStringFormatter-DXhkJRky.js";import"./Button-D2h_fsiV.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CVECtPk8.js";import"./Collection-D_qCe12e.js";import"./index-CIqtmhd8.js";import"./DragAndDrop-DV1nl_hP.js";import"./getScrollParent-DMJ8Owx1.js";import"./scrollIntoView-CYxkmzpX.js";import"./SelectionIndicator-AuNVYjmH.js";import"./SelectionManager-B61PS9GO.js";import"./useEvent-D1NiEUxW.js";import"./useDescription-DyLngsul.js";import"./inertValue-BieBnzNw.js";import"./useHighlightSelectionDescription-C2__VvWx.js";import"./useUpdateEffect-ngTbV_ju.js";import"./ListKeyboardDelegate-DKIOtHk3.js";import"./useHasTabbableChild-DriywoH3.js";import"./Checkbox-BMSKmPPv.js";import"./check-BCE__Jlz.js";import"./useToggleState-BGArRXuI.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
