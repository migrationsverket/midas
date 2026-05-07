import{r as m,f as l,j as t}from"./iframe-D7aktJQV.js";import{S as d}from"./SearchField-By3dPBOW.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BjEc_IYh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DNmLi0Ns.js";import"./clsx-B-dksMZM.js";import"./Form-C922N3ok.js";import"./useFocusRing-BIeXmF9F.js";import"./index-D1nxkkFw.js";import"./index-BhjnNFRZ.js";import"./Input-CAywiR04.js";import"./Hidden-B0OViUit.js";import"./Button-2JoqP8wJ.js";import"./useLabel-yzdCyS6F.js";import"./useLabels-DjGMth6f.js";import"./useButton-D9uxvQZx.js";import"./FieldError-CgOE4cX4.js";import"./Text-DYj0Y-WB.js";import"./clsx-Ciqy0D92.js";import"./Text-DVQHaLD4.js";import"./RSPContexts-BW1FMwMd.js";import"./Group-D6C5clZk.js";import"./useControlledState-1uGcLhZ_.js";import"./useLocalizedStringFormatter-DRhhdLG7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BeAzynaV.js";import"./useField-B0Fny93Q.js";import"./TextField.module-DdivwlC8.js";import"./search-Cs6Yub75.js";import"./createLucideIcon-Bis6T-wM.js";import"./x-z9l8IXo0.js";import"./useLocalizedStringFormatter-V3f1g4sa.js";import"./Button-D5CfzWf4.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ClpBCcmK.js";import"./Collection-DzqeZ_-Z.js";import"./index-DxT1THtT.js";import"./DragAndDrop-BuBQqxBK.js";import"./getScrollParent-Dt9wHwKE.js";import"./scrollIntoView-DKDMhDyf.js";import"./SelectionIndicator-DJ7uEc0n.js";import"./SelectionManager-CA5zQPsy.js";import"./useEvent-D7_OBK7N.js";import"./useDescription-NFTwlXYl.js";import"./inertValue-zIJyfZ8s.js";import"./useHighlightSelectionDescription-BuKCb7fc.js";import"./useUpdateEffect-CEIs7GB-.js";import"./ListKeyboardDelegate-Dwvuav7G.js";import"./useHasTabbableChild-BylbDSLi.js";import"./Checkbox-BsPg26Ci.js";import"./check-BGTtssGI.js";import"./useToggleState-BSf78VtQ.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
