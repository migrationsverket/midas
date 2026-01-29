import{r as m,f as l,j as t}from"./iframe-DUaQtwZ4.js";import{S as d}from"./SearchField-DI9nlJek.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D1Z2uywZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-44ZtI1aY.js";import"./utils-BxoSgS2M.js";import"./useLocalizedStringFormatter-Db2anq4e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CDyrOvSf.js";import"./useFocusRing-rVgXHLOR.js";import"./index-DO5-fwSU.js";import"./index-BXP-Ly31.js";import"./useFormValidation-Bt9ME4iF.js";import"./useField-hX13VR-a.js";import"./Button-i4oaDduy.js";import"./Hidden-DsXdzH0m.js";import"./useLabels-BjsrSgf-.js";import"./useButton-D2Ahp_5H.js";import"./search-CERS_GcL.js";import"./createLucideIcon-DySqv-QW.js";import"./ClearButton-BUrcqnEf.js";import"./Button-DWqhmGVb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DIWwlROZ.js";import"./VisuallyHidden-Dc19GMYo.js";import"./x-D82uET-y.js";import"./FieldError-CgUL0M8n.js";import"./Text-DKXG1-n8.js";import"./Text-DnwjRhY6.js";import"./RSPContexts-cx-hrirP.js";import"./Collection-BMkQ_CeU.js";import"./index-CnROtLDA.js";import"./DragAndDrop-Bi1iQz9Y.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CBJjSzW9.js";import"./SelectionManager-pH20I5CF.js";import"./useEvent-CQ4rq9N1.js";import"./useDescription-BvCGrAk0.js";import"./inertValue-Cf_0f8sa.js";import"./useHighlightSelectionDescription-BAOZpkjT.js";import"./useUpdateEffect-twLBdaoO.js";import"./ListKeyboardDelegate-C1B-0Vfv.js";import"./useHasTabbableChild-B9qPKbSd.js";import"./Checkbox-B8_mTf0J.js";import"./Form-jPX6pm2E.js";import"./check-C1mcACA6.js";import"./useToggleState-DDzryoms.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
