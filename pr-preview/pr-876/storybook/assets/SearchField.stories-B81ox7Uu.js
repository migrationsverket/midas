import{r as m,f as l,j as t}from"./iframe-drf9EhAh.js";import{S as d}from"./SearchField-CmvYn8VB.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CymnExoX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DcVi9P2n.js";import"./clsx-B-dksMZM.js";import"./Form-D1u5ze6A.js";import"./useFocusRing-CFnRXdWt.js";import"./index-DYwtvWTx.js";import"./index-C8RswtkR.js";import"./Input-CkrGyO13.js";import"./Hidden-DCsyu9It.js";import"./Button-uX5YcsyE.js";import"./useLabel-Nvs3avqK.js";import"./useLabels-CghwtOHR.js";import"./useButton-BPOukTAc.js";import"./FieldError-Csn4LdNH.js";import"./Text-4jcbiO_v.js";import"./clsx-Ciqy0D92.js";import"./Text-BGu5cWKN.js";import"./RSPContexts-CdnNEEoB.js";import"./Group-DBxIGOXS.js";import"./useControlledState-PtQwVjVx.js";import"./useLocalizedStringFormatter-B8W8LNuc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-iOBnPuVv.js";import"./useField-BeF2QHdx.js";import"./TextField.module-DdivwlC8.js";import"./search-DVjquVdc.js";import"./createLucideIcon-ZHG_RQ_P.js";import"./x-BhSuHU0t.js";import"./useLocalizedStringFormatter-IFaLmUck.js";import"./Button-CKcwfDVm.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-S3B-3ASH.js";import"./Collection-Bsu-J4zk.js";import"./index-BZAuS4Xz.js";import"./DragAndDrop-Imj0Fqjs.js";import"./getScrollParent-C25lSkvK.js";import"./scrollIntoView-DPcz4qGT.js";import"./SelectionIndicator-CGpdz0B5.js";import"./SelectionManager-Cw-cvhTc.js";import"./useEvent-DDZO5sYT.js";import"./useDescription-DoT_EJq_.js";import"./inertValue-3BsA1ycs.js";import"./useHighlightSelectionDescription-CfI9ziJh.js";import"./useUpdateEffect-DxJx9bl3.js";import"./ListKeyboardDelegate-Cu9VUk_s.js";import"./useHasTabbableChild-Xc-9Se0U.js";import"./Checkbox-Do4fEZ-F.js";import"./check-BQBPIh6T.js";import"./useToggleState-D-98hIvF.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
