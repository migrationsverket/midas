import{r as m,f as l,j as t}from"./iframe-DgqscTRS.js";import{S as d}from"./SearchField-C-V4oYOK.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BK40XQCw.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BxU5vAOZ.js";import"./utils-ihbz_05J.js";import"./useLocalizedStringFormatter-Cwzoxtmk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-1gtjztzu.js";import"./useFocusRing-Dhh24Qf7.js";import"./index-BDRZoG0T.js";import"./index-BTEBzuGD.js";import"./useFormValidation-MoGwb86J.js";import"./useField-C3Xp4KM5.js";import"./Button-BI2DB5nm.js";import"./Hidden-CnPSLy5g.js";import"./useLabels-BVW64SDg.js";import"./useButton-CYDL-Eqv.js";import"./search-CHGulDQE.js";import"./createLucideIcon-vPVORsKq.js";import"./ClearButton-DeRFA84b.js";import"./x-DgcRhLbY.js";import"./Button-CpE1Qe3l.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CetFiEjn.js";import"./VisuallyHidden-anAyNDA7.js";import"./FieldError-BVwBPTGy.js";import"./Text-DJuD0Zjj.js";import"./Text-BkGEZWiq.js";import"./RSPContexts-CP-g27nm.js";import"./Collection-cGityvOE.js";import"./index-Cl8Gq0kx.js";import"./DragAndDrop-1VEudIxj.js";import"./getScrollParent-CyRuL-ax.js";import"./scrollIntoView-Ch6Ee1HN.js";import"./SelectionIndicator-CaTBieRu.js";import"./SelectionManager-ZcALuitN.js";import"./useEvent-BBYgrCp6.js";import"./useDescription-BEpuG-o8.js";import"./inertValue-C036g8V6.js";import"./useHighlightSelectionDescription-4bZTQhPn.js";import"./useUpdateEffect-CMQSa0bV.js";import"./ListKeyboardDelegate-DFfkSN-z.js";import"./useHasTabbableChild-DjsExBCU.js";import"./Checkbox-DQxJPQsg.js";import"./Form-gm0DNf8-.js";import"./check-C7cLen_e.js";import"./useToggleState-CxXSRbOY.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
