import{r as m,f as l,j as t}from"./iframe-Dr7ArToC.js";import{S as d}from"./SearchField-DMr0diOE.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BNCI-TPF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B9wkB9jr.js";import"./clsx-B-dksMZM.js";import"./Form-C7cXtg_z.js";import"./useFocusRing-Be1E2wiN.js";import"./index-D4IeCl1O.js";import"./index-CeL9iIrJ.js";import"./Input-BeJJcU3N.js";import"./Hidden-DypslUjc.js";import"./Button-3lqUDVlM.js";import"./useLabel-138CLUtK.js";import"./useLabels-DXcJ5KZ7.js";import"./useButton-BWyNL83U.js";import"./FieldError-DgDXg6nA.js";import"./Text-z1_3LhQE.js";import"./clsx-Ciqy0D92.js";import"./Text-DCnBb7WN.js";import"./RSPContexts-CJ8QUqZN.js";import"./Group-BA6U_RSU.js";import"./useControlledState-CnU7ybFm.js";import"./useLocalizedStringFormatter-B9QZX5JK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D43v3m3F.js";import"./useField-DAkRnFmj.js";import"./TextField.module-DdivwlC8.js";import"./search-CNQ7cGxz.js";import"./createLucideIcon-bstwz77u.js";import"./x-CL4LyG_m.js";import"./useLocalizedStringFormatter-xGiRnejW.js";import"./Button-eaMP_jYx.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CpUpJPrc.js";import"./Collection-D3KSFdJ3.js";import"./index-CcZ6tb7G.js";import"./DragAndDrop-Dg8-bH4d.js";import"./getScrollParent-BdMN0M99.js";import"./scrollIntoView-BBw0BaEI.js";import"./SelectionIndicator-CQ7IHMnW.js";import"./SelectionManager-TUOJ6S22.js";import"./useEvent-C68f-4At.js";import"./useDescription-CPrwApjd.js";import"./inertValue--i_iO2DH.js";import"./useHighlightSelectionDescription-TgbPXMyL.js";import"./useUpdateEffect-DOraXx5x.js";import"./ListKeyboardDelegate-dnJAJmI1.js";import"./useHasTabbableChild-BaAFzHwW.js";import"./Checkbox-gMEGppow.js";import"./check-D6T6cZmx.js";import"./useToggleState-eghIJI12.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
