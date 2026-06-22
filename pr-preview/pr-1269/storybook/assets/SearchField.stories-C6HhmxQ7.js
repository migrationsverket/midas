import{r as m,f as l,j as t}from"./iframe-Cttpu6ri.js";import{S as d}from"./SearchField-D2IyliAU.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-gK4TRJD0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BuF_h7AP.js";import"./clsx-B-dksMZM.js";import"./Form-Akxi3hJ_.js";import"./useFocusRing-Da5Lg8ZZ.js";import"./index-D0txj7Kr.js";import"./index-dIHcpMJ6.js";import"./Input-ytqw39oT.js";import"./Hidden-C4gGqRbi.js";import"./Button-BgQeNeK3.js";import"./useLabel-CDs_h7ib.js";import"./useLabels-iWlhSr0B.js";import"./useButton-BMgOxl6g.js";import"./FieldError-iMDvMznL.js";import"./Text-Bia_ZCxP.js";import"./clsx-Ciqy0D92.js";import"./Text-BDpwDhFd.js";import"./RSPContexts-BavTxQ8D.js";import"./Group-DLtc9AkO.js";import"./useControlledState-Dikg9rpi.js";import"./useLocalizedStringFormatter-BUIk-26D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-IjevuV_3.js";import"./useField-D8xc0ZN-.js";import"./TextField.module-DdivwlC8.js";import"./search-a5dkKbej.js";import"./createLucideIcon-DxQlc1dM.js";import"./x-B0jtMRI2.js";import"./useLocalizedStringFormatter-DKwzGpb3.js";import"./Button-BdE_pR_p.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B52J-ASA.js";import"./Collection-Br2XSWqI.js";import"./index-CcsaxKNv.js";import"./DragAndDrop-X6kGUkBd.js";import"./getScrollParent-CEbSHGM5.js";import"./scrollIntoView-CRiUVsu9.js";import"./SelectionIndicator-D4Cu198i.js";import"./SelectionManager-oX8CqZfv.js";import"./useEvent-BTP9ZQAw.js";import"./useDescription-Xa_PnaVA.js";import"./inertValue-JcsqbvzY.js";import"./useHighlightSelectionDescription-DY2p1lV5.js";import"./useUpdateEffect-CGgiFki9.js";import"./ListKeyboardDelegate-RgqmVszr.js";import"./useHasTabbableChild-C4zszogg.js";import"./Checkbox-DyLPyYeu.js";import"./check-DUJYsOwX.js";import"./useToggleState-Bo7qjuBE.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
