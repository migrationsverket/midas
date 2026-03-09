import{r as m,f as l,j as t}from"./iframe-CgeuBGg3.js";import{S as d}from"./SearchField-CoCB4fgs.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B1Zdkesg.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-hrYI1rS_.js";import"./utils-D5ZiOk7c.js";import"./useLocalizedStringFormatter-DdY9z82P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CR5nipmw.js";import"./useFocusRing-CtUB-pVk.js";import"./index-C0DQMcLX.js";import"./index-Dr51d6up.js";import"./useFormValidation-B3OZSiFR.js";import"./useField-CrURjpqd.js";import"./Button-D49K8NN3.js";import"./Hidden-BuqiSPlJ.js";import"./useLabels-CcDa7eqk.js";import"./useButton-BafbxBxx.js";import"./search-BIcPsdZp.js";import"./createLucideIcon-j5uHxTIE.js";import"./ClearButton-CEuDz5KJ.js";import"./Button-B3bHm7yN.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BVH642Vw.js";import"./VisuallyHidden-nAkuDexq.js";import"./x-82ZwNPo6.js";import"./FieldError-Ck8WwPsT.js";import"./Text-BY_Jfm-B.js";import"./Text-cOijWBlA.js";import"./RSPContexts-Cmp2aHI0.js";import"./Collection-C0rNIg_w.js";import"./index-xz0YMXZu.js";import"./DragAndDrop-B5XOYRSn.js";import"./getScrollParent-BZNtwC6u.js";import"./scrollIntoView-BOtoWgvj.js";import"./SelectionIndicator-B5iuuJYR.js";import"./SelectionManager-FueJVEvO.js";import"./useEvent-DfWlG2fS.js";import"./useDescription-FPRM_do-.js";import"./inertValue-Deeqg3Fo.js";import"./useHighlightSelectionDescription-CgvhJDr-.js";import"./useUpdateEffect-D3Eg3csO.js";import"./ListKeyboardDelegate-BJowuom4.js";import"./useHasTabbableChild-BqnzUrJ_.js";import"./Checkbox-BJMBKVVB.js";import"./Form-OezuEZAr.js";import"./check-BrJWqDvS.js";import"./useToggleState-BkXl4epD.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
