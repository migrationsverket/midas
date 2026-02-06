import{r as m,f as l,j as t}from"./iframe-ATzl8XNu.js";import{S as d}from"./SearchField-DorBlxHP.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B7hvLfOL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BW_0fp0P.js";import"./utils-Cephp3rV.js";import"./useLocalizedStringFormatter-D8Kn80zC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Jm6rKQrq.js";import"./useFocusRing-ukiZ3Ae7.js";import"./index-CaW5UWpb.js";import"./index-V5YcHX-r.js";import"./useFormValidation-BIKLk_Xn.js";import"./useField-CBkghgUG.js";import"./Button-D92ovwB_.js";import"./Hidden-BWe0F6w6.js";import"./useLabels-tIVsswAO.js";import"./useButton-BsQSv027.js";import"./search-C2AEQ7-w.js";import"./createLucideIcon-JvePCe7s.js";import"./ClearButton-BWPnEv2H.js";import"./Button-Bsz6RG7e.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-OfhFidRK.js";import"./VisuallyHidden-B7WhOGok.js";import"./x-BmEx4eXF.js";import"./FieldError-C2MY82An.js";import"./Text-aG-TJfe-.js";import"./Text-B2jI714W.js";import"./RSPContexts-g44b3QqL.js";import"./Collection-ZnBZXNKj.js";import"./index-DR9JhBGy.js";import"./DragAndDrop-C8ndaE4o.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DFa8mu4E.js";import"./SelectionManager-F7a4txdx.js";import"./useEvent-CSZRshWR.js";import"./useDescription-DCZ17iuR.js";import"./inertValue-BNRCWIB3.js";import"./useHighlightSelectionDescription-DF4UhgnV.js";import"./useUpdateEffect-PxRhGDFm.js";import"./ListKeyboardDelegate-BCGM-8wK.js";import"./useHasTabbableChild-BtiNHYfv.js";import"./Checkbox-B6y1UGXM.js";import"./Form-D7ezNQUV.js";import"./check-B1fFJJeb.js";import"./useToggleState-Y2vrFfha.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
