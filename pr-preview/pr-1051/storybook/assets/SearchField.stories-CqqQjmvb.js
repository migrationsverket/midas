import{r as m,f as l,j as t}from"./iframe-CdQtBTvN.js";import{S as d}from"./SearchField-BInpojik.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DCswNkKn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-hCPuu9ww.js";import"./clsx-B-dksMZM.js";import"./Form-BVXAN9pd.js";import"./useFocusRing-Dx5ENljC.js";import"./index-BqBvBc_L.js";import"./index-CBjbBfBt.js";import"./Input-BVDlt9KU.js";import"./Hidden-VZvKjJAN.js";import"./Button-C9FUZnpG.js";import"./useLabels-DmlxY5xa.js";import"./useButton-BMciKW0o.js";import"./FieldError-Ds80xhU5.js";import"./Text-BlVIijGN.js";import"./clsx-Ciqy0D92.js";import"./Text-DG4x08uA.js";import"./RSPContexts-GhAFq0Kb.js";import"./Group-233jJZbh.js";import"./useControlledState-CDyRnnpP.js";import"./useLocalizedStringFormatter-CAvIyCZj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-GzIj8dQh.js";import"./useField-Cl9d5qMs.js";import"./TextField.module-DdivwlC8.js";import"./search-D-NyE4ZW.js";import"./createLucideIcon-TCf9LglA.js";import"./x-D3W8hHwK.js";import"./useLocalizedStringFormatter-BjshCCmP.js";import"./Button-NsfQzJOD.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C2L8poid.js";import"./Collection-D73FRwXS.js";import"./index-Bj3FFH3o.js";import"./DragAndDrop-BtrIKU2P.js";import"./getScrollParent-EH2M_cTQ.js";import"./scrollIntoView-BM5ZBaG8.js";import"./SelectionIndicator-CK_97_IP.js";import"./SelectionManager-BDRFpfbc.js";import"./useEvent-DC4JEHXI.js";import"./useDescription-WCfTXBDc.js";import"./inertValue-BphV-9wH.js";import"./useHighlightSelectionDescription-Dp2maWbO.js";import"./useUpdateEffect-CqBY0sZj.js";import"./ListKeyboardDelegate-HOWkR3EC.js";import"./useHasTabbableChild-C8A1Uyw2.js";import"./Checkbox-Wx443H_X.js";import"./check-nmQ-0Ys4.js";import"./useToggleState-M1lzLFLy.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
